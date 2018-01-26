/* @flow */
import { TIER_COLORS } from 'src/data/MAPS';
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
    const tierRange = TIER_COLORS[this.props.tier];

    return (
      <div>
        <span
          css={`
            display: inline-block;
            vertical-align: middle;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 10px;
            background-color: ${tierRange ? tierRange.rgb : 'transparent'};
          `}
        />
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
