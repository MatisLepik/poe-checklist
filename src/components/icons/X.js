/* @flow */
import COLORS from 'src/styles/COLORS';
import React from 'react';

export type Props = {};

export default class X extends React.Component {
  props: Props;

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 357 357"
        fill={COLORS.FOREGROUND}
        {...this.props}
      >
        <path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8" />
      </svg>
    );
  }
}
