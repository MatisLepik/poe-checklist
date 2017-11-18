/* @flow */
import React from 'react';
import styled from 'react-emotion';

export type Props = {};

const Wrapper = styled.div`
  display: inline-block;
  text-align: center;

  + div {
    margin-left: 5px;
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Name = styled.div`
  font-size: 9px;
  text-transform: uppercase;
  font-weight: 600;
`;

export default class Essence extends React.Component {
  props: Props;

  render() {
    const { type } = this.props;
    return (
      <Wrapper>
        <Name>{type}</Name>
        <Img
          alt={type}
          src={require(`src/images/essences/Deafening_Essence_of_${type}_inventory_icon.png`)}
        />
      </Wrapper>
    );
  }
}
