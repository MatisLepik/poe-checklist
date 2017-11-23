/* @flow */
import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import SIZES from 'src/styles/SIZES';

export type Props = {};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

const InfoIcon = styled.img`
  width: ${SIZES.LINK_SIZE}px;
  height: ${SIZES.LINK_SIZE}px;
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
