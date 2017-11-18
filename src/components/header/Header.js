/* @flow */
import { H1 } from 'src/components/styled/Heading';
import COLORS from 'src/styles/COLORS';
import InfoLink, { LINK_SIZE } from 'src/components/info/InfoLink';
import MaxWidthWrapper, {
  MAX_WIDTH,
} from 'src/components/styled/MaxWidthWrapper';
import Nav from 'src/components/header/Nav';
import React from 'react';
import styled, { css } from 'react-emotion';

export type Props = {};
const FULL_WIDTH_NAV_BP = 720;

const spaceBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${FULL_WIDTH_NAV_BP}px) {
    justify-content: center;
  }
`;

const HeaderContainer = styled.div`
  text-align: left;
  height: 70px;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${COLORS.DIM};
  position: relative;

  @media (max-width: ${MAX_WIDTH + LINK_SIZE * 2}px) {
    padding-right: ${LINK_SIZE + 5}px;

    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: ${FULL_WIDTH_NAV_BP}px) {
    padding-right: 0;

    h1 {
      display: none;
    }
  }

  * {
    margin: 0;
  }
`;

export default class Header extends React.Component {
  props: Props;

  render() {
    return (
      <HeaderContainer data-test="header">
        <MaxWidthWrapper css={spaceBetween}>
          <H1>PoE Checklist</H1>
          <Nav />
        </MaxWidthWrapper>
        <InfoLink />
      </HeaderContainer>
    );
  }
}
