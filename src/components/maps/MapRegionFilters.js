/* @flow */
import { connect } from 'react-redux';
import { toggleFilter, FILTER_POOLS } from 'src/redux/modules/filters';
import Checkbox from 'src/components/forms/Checkbox';
import InputWrapper from 'src/components/styled/InputWrapper';
import React from 'react';
import styled from 'react-emotion';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 25px;

  > * {
    flex-basis: 25%;
  }
`;

export type Props = {};

export class MapFilters extends React.Component {
  props: Props;

  handleToggle = evt =>
    this.props.toggleFilter(FILTER_POOLS.MAPS, evt.currentTarget.name);

  render() {
    return (
      <Grid>
        <InputWrapper>
          <Checkbox
            name="hideHaewarkHamlet"
            checked={!!this.props.hideHaewarkHamlet}
            onChange={this.handleToggle}
          >
            Hide Haewark Hamlet
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideTirnsEnd"
            checked={!!this.props.hideTirnsEnd}
            onChange={this.handleToggle}
          >
            Hide Tirn's End
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideLexProxima"
            checked={!!this.props.hideLexProxima}
            onChange={this.handleToggle}
          >
            Hide Lex Proxima
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideLexEjoris"
            checked={!!this.props.hideLexEjoris}
            onChange={this.handleToggle}
          >
            Hide Lex Ejoris
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideNewVastir"
            checked={!!this.props.hideNewVastir}
            onChange={this.handleToggle}
          >
            Hide New Vastir
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideGlennachCairns"
            checked={!!this.props.hideGlennachCairns}
            onChange={this.handleToggle}
          >
            Hide Glennach Cairns
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideValdosRest"
            checked={!!this.props.hideValdosRest}
            onChange={this.handleToggle}
          >
            Hide Valdo's Rest
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideLiraArthain"
            checked={!!this.props.hideLiraArthain}
            onChange={this.handleToggle}
          >
            Hide Lira Arthain
          </Checkbox>
        </InputWrapper>
      </Grid>
    );
  }
}

export default connect(
  state => ({
    ...state.filters.maps,
  }),
  { toggleFilter }
)(MapFilters);
