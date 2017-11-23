/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';
import MaxWidthWrapper from 'src/components/styled/MaxWidthWrapper';
import SIZES from 'src/styles/SIZES';

export type Props = {};
const notesOpenStyles = css`
  @media (min-width: ${SIZES.BP_HIDE_DRAWERS}px) and (max-width: 2080px) {
    padding-right: ${SIZES.NOTES_WIDTH}px;

    .maxwidth-wrapper {
      margin-right: 0;
    }
  }
`;

const notesClosedStyles = css`
  @media (min-width: ${SIZES.BP_HIDE_DRAWERS}px) and (max-width: 1460px) {
    padding-right: 200px;

    .maxwidth-wrapper {
      margin-right: 0;
    }
  }
`;

const Container = styled.div`
  padding-top: ${SIZES.PAGE_CONTAINER_PADDING}px;

  ${p => (p.isNotesOpen ? notesOpenStyles : notesClosedStyles)};

  @media (max-width: ${SIZES.MAX_WIDTH}px) {
    padding-top: 7px;
  }
`;

export class PageContainer extends React.Component {
  props: Props;

  render() {
    return (
      <Container
        data-test="page-container"
        isNotesOpen={this.props.isNotesOpen}
        className={`page page-${this.props.page || 'default'}`}
      >
        <MaxWidthWrapper className="maxwidth-wrapper">
          {this.props.children}
        </MaxWidthWrapper>
      </Container>
    );
  }
}

export default connect(state => ({
  isNotesOpen: !!state.ui.drawers.notes,
}))(PageContainer);
