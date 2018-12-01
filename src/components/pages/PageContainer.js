/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import MaxWidthWrapper from 'src/components/styled/MaxWidthWrapper';
import SIZES from 'src/styles/SIZES';

export type Props = {};

const Container = styled.div`
  padding-top: ${SIZES.PAGE_CONTAINER_PADDING}px;

  @media (min-width: ${SIZES.BP_HIDE_DRAWERS}px) and (max-width: 1460px) {
    padding-right: 200px;

    .maxwidth-wrapper {
      margin-right: 0;
    }
  }

  @media (max-width: ${SIZES.MAX_WIDTH}px) {
    padding-top: 7px;
  }
`;

export class PageContainer extends React.Component {
  props: Props;

  componentDidMount() {
    if (
      typeof this.props.notesData === 'string' &&
      this.props.notesData.length > 0
    ) {
      console.info('Data from notes:');
      console.info(this.props.notesData);
    }
  }

  render() {
    return (
      <Container
        data-test="page-container"
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
  notesData: state.ui.notes && state.ui.notes.defaultValue,
}))(PageContainer);
