/* @flow */
import { connect } from 'react-redux';
import { toggleFilter, FILTER_POOLS } from 'src/redux/modules/filters';
import Checkbox from 'src/components/forms/Checkbox';
import InputWrapper from 'src/components/styled/InputWrapper';
import React from 'react';

export type Props = {};

export class PassiveQuestsFilters extends React.Component {
  props: Props;

  handleToggle = evt =>
    this.props.toggleFilter(FILTER_POOLS.PASSIVES, evt.currentTarget.name);

  render() {
    return (
      <div>
        <InputWrapper>
          <Checkbox
            name="hideCheckedQuests"
            checked={!!this.props.hideCheckedQuests}
            onChange={this.handleToggle}
          >
            Hide checked quests
          </Checkbox>
        </InputWrapper>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.filters.passives,
  }),
  { toggleFilter }
)(PassiveQuestsFilters);
