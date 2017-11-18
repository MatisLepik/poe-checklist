import React from 'react';
import styled from 'react-emotion';
import { MAX_WIDTH } from 'src/components/styled/MaxWidthWrapper';

const Wrapper = styled.div`
  padding: 15px;

  > *:first-child {
    margin-top: 0;
  }

  @media (max-width: ${MAX_WIDTH}px) {
    padding: 7px;
  }
`;
const PageDescription = ({ children, ...rest }) => (
  <Wrapper>{children}</Wrapper>
);

export default PageDescription;
