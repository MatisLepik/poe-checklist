/* @flow */
import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

export type Props = {};

export const LINK_SIZE = 18;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

const InfoIcon = styled.img`
  width: ${LINK_SIZE}px;
  height: ${LINK_SIZE}px;
  background-size: contain;

  @media (max-width: 600px) {
    display: none;
  }
`;

export default class InfoLink extends React.Component {
  props: Props;

  render() {
    return (
      <Wrapper>
        <Link to="/about">
          <InfoIcon src={require('src/images/info.svg')} />
        </Link>
      </Wrapper>
    );
  }
}
