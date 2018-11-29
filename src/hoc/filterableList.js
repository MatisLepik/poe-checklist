/* @flow */
import React from 'react';
import { connect } from 'react-redux';

export default ({ pool, filter } = {}) => Component =>
  connect(state => ({
    filters: state.filters[pool],
  }))(
    class FilterableList extends React.Component {
      constructor(props: Props) {
        super(props);

        this.state = {
          list: this.getSortedList(props.list, props.filters),
        };
      }

      UNSAFE_componentWillReceiveProps(nextProps) {
        // We cache the filtered list so it doesn't need to be calculated on every re-render.
        // So here we need to recalulate whenever the reference changes
        if (
          this.props.list !== nextProps.list ||
          this.props.filters !== nextProps.filters
        ) {
          this.setState({
            list: this.getSortedList(nextProps.list, nextProps.filters),
          });
        }
      }

      getSortedList(original: Array<Object>, filters: Array<boolean>) {
        if (!Array.isArray(original)) {
          console.warn(
            'Invalid list passed to filterableList (must be array):',
            original
          );
          return original;
        }

        return original.filter(map => filter(map, filters, this.props));
      }

      render() {
        const { filters, ...rest } = this.props;
        return <Component {...rest} list={this.state.list} />;
      }
    }
  );
