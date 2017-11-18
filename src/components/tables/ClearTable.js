/* @flow */
import React from 'react';
import styled from 'react-emotion';
import COLORS from 'src/styles/COLORS';
import X from 'src/components/icons/X';

export type Props = {};

const Wrapper = styled.button`
  &:hover svg {
    fill: ${COLORS.MAP_RED};
  }
`;

export default class ClearTable extends React.Component {
  props: Props;

  handleClick = () => {
    const shouldClear = window.confirm(
      `Are you sure you want to uncheck all ${this.props
        .name}? \nThis cannot be reversed.`
    );

    if (shouldClear) this.props.onClear && this.props.onClear();
  };

  render() {
    return (
      <Wrapper onClick={this.handleClick}>
        <X />
      </Wrapper>
    );
  }
}
