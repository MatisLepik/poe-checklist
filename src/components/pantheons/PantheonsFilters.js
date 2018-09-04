/* @flow */
import { connect } from 'react-redux';
import { toggleFilter, FILTER_POOLS } from 'src/redux/modules/filters';
import Checkbox from 'src/components/forms/Checkbox';
import InputWrapper from 'src/components/styled/InputWrapper';
import React from 'react';

export type Props = {};

export class PantheonsFilters extends React.Component {
  props: Props;

  handleToggle = evt =>
    this.props.toggleFilter(FILTER_POOLS.PANTHEONS, evt.currentTarget.name);

  render() {
    return (
      <div>
        <InputWrapper>
          <Checkbox
            name="hideChecked"
            checked={!!this.props.hideChecked}
            onChange={this.handleToggle}
          >
            Hide checked pantheons
          </Checkbox>
        </InputWrapper>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.filters.pantheons,
  }),
  { toggleFilter }
)(PantheonsFilters);
