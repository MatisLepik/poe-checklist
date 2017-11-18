/* @flow */
import React from 'react';

export type Props = {};

export default class NumberCell extends React.Component {
  props: Props;

  render() {
    return (
      <span css={`font-size: 20px`}>
        {this.props[this.props.col.key] || this.props.col.defaultValue}
      </span>
    );
  }
}
