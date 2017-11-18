/* @flow */
import React from 'react';
import Checkbox from 'src/components/forms/Checkbox';
import styled from 'react-emotion';

export type Props = {};

const Wrapper = styled.div`pointer-events: none;`;

export default class TableCheck extends React.Component {
  props: Props;

  handleChange = () =>
    this.props.onCheck &&
    this.props.onCheck(this.props.checkable, this.props.id);

  render() {
    return (
      <Wrapper>
        <Checkbox checked={this.props.value} onChange={this.handleChange} />
      </Wrapper>
    );
  }
}
