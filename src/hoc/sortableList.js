/* @flow */
import React from 'react';
import orderBy from 'lodash/orderBy';
import storage from 'src/utils/storage';

type sortStrategyFunc = (
  arr: Array<Object>,
  sortBy: string,
  orders: Array<string>,
  fallbackSorters?: Function | Object | string
) => Array<Object>;

export const SORT_STRATEGIES = {
  ALPHABETIC: (
    arr,
    sortBy,
    order,
    fallbackSorters = [x => +x.id]
  ): sortStrategyFunc =>
    orderBy(
      arr,
      [
        x => (x[sortBy] || '').toString().toLocaleLowerCase(),
        ...fallbackSorters,
      ],
      [order, ...fallbackSorters.map(() => 'asc')]
    ),
  NUMERIC: (
    arr,
    sortBy,
    order,
    fallbackSorters = [x => +x.id]
  ): sortStrategyFunc =>
    orderBy(
      arr,
      [
        x => +(typeof x[sortBy] === 'number' ? x[sortBy] : Infinity),
        ...fallbackSorters,
      ],
      [order, ...fallbackSorters.map(() => 'asc')]
    ),
};

export default ({ sort } = {}) => Component =>
  class SortableList extends React.Component {
    constructor(props) {
      super(props);

      const key = sort
        ? storage.get(this.getStorageKey('key')) || sort.defaultKey
        : null;
      const order = sort
        ? storage.get(this.getStorageKey('order')) || sort.defaultOrder
        : null;

      this.state = {
        key,
        order,
        list: this.getFilteredList(props.list, key, order),
      };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      // We cache the filtered list so it doesn't need to be calculated on every re-render.
      // So here we need to recalulate whenever the reference changes
      if (this.props.list !== nextProps.list) {
        this.setState({
          list: this.getFilteredList(
            nextProps.list,
            this.state.key,
            this.state.order
          ),
        });
      }
    }

    getStorageKey = key => `${(sort && sort.persist) || 'default'}-${key}`;

    handleSort = key => {
      if (!sort || !sort.keys[key]) {
        console.warn(
          'Invalid key passed to handleSort (must be in sort.keys object passed to sortableList):',
          key
        );
        return;
      }

      this.setState(oldState => {
        const order =
          oldState.key === key
            ? oldState.order === 'asc' ? 'desc' : 'asc'
            : sort.defaultOrder || 'asc';

        if (sort.persist) {
          storage.set(this.getStorageKey('key'), key);
          storage.set(this.getStorageKey('order'), order);
        }

        return {
          key,
          order,
          list: this.getFilteredList(this.props.list, key, order),
        };
      });
    };

    getSortedList(
      list: Array<Object>,
      key: string,
      order: string
    ): Array<Object> {
      const strategy = sort.keys[key];

      if (!strategy) return list;

      return strategy(list, key, order, sort.fallbackSorters);
    }

    getFilteredList(original: Array<Object>, key: string, order: string) {
      if (!Array.isArray(original)) {
        console.warn(
          'Invalid list passed to sortableList (must be array):',
          original
        );
        return original;
      }

      return this.getSortedList(original, key, order);
    }

    render() {
      return (
        <Component
          {...this.props}
          list={this.state.list}
          onSort={this.handleSort}
          sortOrder={this.state.order}
          sortKey={this.state.key}
        />
      );
    }
  };
