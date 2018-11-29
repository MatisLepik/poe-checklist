/* @flow */
import { checkItem, clearList } from 'src/redux/modules/checklist';
import { connect } from 'react-redux';
import React from 'react';

export default ({ checkable } = {}) => Component =>
  connect(
    state => ({
      checkedItems: state.checklist[checkable] || {},
    }),
    { checkItem, clearList }
  )(
    class CheckableList extends React.Component {
      constructor(props: Props) {
        super(props);

        this.state = {
          list: this.listWithChecked(props.list, props.checkedItems),
        };
      }

      UNSAFE_componentWillReceiveProps(nextProps) {
        // We cache the filtered list so it doesn't need to be calculated on every re-render.
        // So here we need to recalulate whenever the reference changes
        if (
          this.props.list !== nextProps.list ||
          this.props.checkedItems !== nextProps.checkedItems
        ) {
          this.setState({
            list: this.listWithChecked(nextProps.list, nextProps.checkedItems),
          });
        }
      }

      handleClear = () => {
        this.props.clearList(checkable);
      };

      listWithChecked = (
        original: Array<Object>,
        checkedItems: Array<boolean>
      ) => {
        if (!Array.isArray(original)) {
          console.warn(
            'Invalid list passed to CheckableList (must be array):',
            original
          );
          return original;
        }

        return original.map(item => {
          return {
            ...item,
            isChecked: checkedItems[item.id] === true,
          };
        });
      };

      render() {
        const { checkedItems, ...rest } = this.props;
        return (
          <Component
            {...rest}
            list={this.state.list}
            onCheck={this.props.checkItem}
            onClear={this.handleClear}
          />
        );
      }
    }
  );
