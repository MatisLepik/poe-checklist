/* @flow */
import React from 'react';
import styled from 'react-emotion';
import MaxWidthWrapper, {
  MAX_WIDTH,
} from 'src/components/styled/MaxWidthWrapper';

export type Props = {};

const Container = styled.div`
  padding-top: 50px;

  @media (max-width: ${MAX_WIDTH}px) {
    padding-top: 7px;
  }
`;

export default class PageContainer extends React.Component {
  props: Props;

  render() {
    return (
      <Container className={`page page-${this.props.page || 'default'}`}>
        <MaxWidthWrapper>{this.props.children}</MaxWidthWrapper>
      </Container>
    );
  }
}
