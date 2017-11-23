import React from 'react';
import styled from 'react-emotion';
import SIZES from 'src/styles/SIZES';

const Wrapper = styled.div`
  padding: 15px;

  > *:first-child {
    margin-top: 0;
  }

  @media (max-width: ${SIZES.MAX_WIDTH}px) {
    padding: 7px;
  }
`;
const PageDescription = ({ children, ...rest }) => (
  <Wrapper>{children}</Wrapper>
);

export default PageDescription;
