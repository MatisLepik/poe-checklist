/* @flow */
import React from 'react';
import styled from 'react-emotion';

export type Props = {};

const SHAPERS_ORB_UPGRADES_BY = 5;

const Wrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 12px;
  height: 25px;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
`;

export default class ShapersOrbIndicator extends React.Component {
  props: Props;

  render() {
    return (
      <Wrapper>
        <Image
          src={require('src/images/shapers-orb.png')}
          alt="Gives Shaper's Orb"
        />
        <small>
          {this.props.from} &rarr; {this.props.from + SHAPERS_ORB_UPGRADES_BY}
        </small>
      </Wrapper>
    );
  }
}
