/* @flow */
import React from 'react';
import styled from 'react-emotion';
import COLORS from 'src/styles/COLORS';

export type Props = {};

const Button = styled.button`
  svg {
    height: 35px;
    width: 35px;
    padding: 10px;

    path {
      transition: fill 150ms;
    }
  }

  &:hover svg path {
    fill: ${COLORS.FOREGROUND_HIGHLIGHT};
  }
`;

export default class CloseButton extends React.Component {
  props: Props;

  render() {
    return (
      <Button className={this.props.className} onClick={this.props.onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357">
          <path
            fill={COLORS.FOREGROUND}
            d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8"
          />
        </svg>
      </Button>
    );
  }
}
