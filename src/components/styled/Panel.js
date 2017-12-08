/* @flow */
import { rgba } from 'polished';
import COLORS from 'src/styles/COLORS';
import SIZES from 'src/styles/SIZES';
import styled from 'react-emotion';

export type Props = {};

export default styled.div`
  background-color: ${rgba(COLORS.BACKGROUND_PANEL, 0.9)};
  border-radius: 3px;
  padding: 15px;

  @media (max-width: ${SIZES.MAX_WIDTH}px) {
    padding: 7px;
  }
`;
