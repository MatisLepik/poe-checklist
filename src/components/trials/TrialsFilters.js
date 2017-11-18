/* @flow */
import { connect } from 'react-redux';
import { toggleFilter, FILTER_POOLS } from 'src/redux/modules/filters';
import Checkbox from 'src/components/forms/Checkbox';
import InputWrapper from 'src/components/styled/InputWrapper';
import React from 'react';

export type Props = {};

export class TrialsFilters extends React.Component {
  props: Props;

  handleToggle = evt =>
    this.props.toggleFilter(FILTER_POOLS.TRIALS, evt.currentTarget.name);

  render() {
    return (
      <div>
        <InputWrapper>
          <Checkbox
            name="hideChecked"
            checked={!!this.props.hideChecked}
            onChange={this.handleToggle}
          >
            Hide checked trials
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideEternal"
            checked={!!this.props.hideEternal}
            onChange={this.handleToggle}
          >
            Hide eternal difficulty
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideMerciless"
            checked={!!this.props.hideMerciless}
            onChange={this.handleToggle}
          >
            Hide merciless difficulty
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideCruel"
            checked={!!this.props.hideCruel}
            onChange={this.handleToggle}
          >
            Hide cruel difficulty
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideNormal"
            checked={!!this.props.hideNormal}
            onChange={this.handleToggle}
          >
            Hide normal difficulty
          </Checkbox>
        </InputWrapper>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.filters.trials,
  }),
  { toggleFilter }
)(TrialsFilters);
