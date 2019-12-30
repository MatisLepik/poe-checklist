/* @flow */
import React from 'react';
import COLORS from 'src/styles/COLORS';

export type Props = {
  tier: number,
  name: string,
  isUnique: boolean,
};

export default class MapName extends React.Component {
  props: Props;

  render() {
    return (
      <div>
        <span
          css={`
            display: inline-block;
            vertical-align: middle;
            color: ${this.props.isUnique ? COLORS.UNIQUE : 'inherit'};
          `}
        >
          {this.props.name}{' '}
          {this.props.zoneName && <small>({this.props.zoneName})</small>}
        </span>
      </div>
    );
  }
}
