/* @flow */
// import React from 'react';
import styled from 'react-emotion';
import COLORS from 'src/styles/COLORS';
import { rgba } from 'polished';
import { MAX_WIDTH } from 'src/components/styled/MaxWidthWrapper';

export type Props = {};

export default styled.div`
  background-color: ${rgba(COLORS.BACKGROUND_PANEL, 0.85)};
  border-radius: 3px;
  padding: 15px;

  @media (max-width: ${MAX_WIDTH}px) {
    padding: 7px;
  }
`;
