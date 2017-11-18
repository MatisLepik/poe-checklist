/* @flow */
import React from 'react';
import { wikipediafy } from 'src/data/PASSIVES';
import styled from 'react-emotion';
import COLORS from 'src/styles/COLORS';
import { CONTENT_ROW_HEIGHT } from 'src/components/tables/ContentRow';

export type Props = {};

const Link = styled.a`
  text-decoration: underline;
  color: ${COLORS.FOREGROUND} !important;
  line-height: ${CONTENT_ROW_HEIGHT}px;
  display: inline-block;

  &:hover {
    color: ${COLORS.LINK} !important;
  }
`;

export default class PassiveQuestName extends React.Component {
  props: Props;

  render() {
    return (
      <div>
        <Link href={wikipediafy(this.props.quest)}>{this.props.quest}</Link>
      </div>
    );
  }
}
