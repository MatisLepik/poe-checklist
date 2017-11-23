/* @flow */
import React from 'react';
import styled from 'react-emotion';
import Essence from 'src/components/essences/Essence';

const Wrapper = styled.div`opacity: 0.8;`;

export type Props = {};

export default class GoodEssences extends React.Component {
  props: Props;

  render() {
    return (
      <Wrapper title="These essences are worth using a Remnant of Corruption on">
        <Essence type="Misery" />
        <Essence type="Envy" />
        <Essence type="Dread" />
        <Essence type="Scorn" />
      </Wrapper>
    );
  }
}
