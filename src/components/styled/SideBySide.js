/* @flow */
import styled from 'react-emotion';
import { MAX_WIDTH } from 'src/components/styled/MaxWidthWrapper';

export const FlexWrapper = styled.div`
  display: flex;
  align-items: ${p => (p.centerVertically ? 'center' : 'flex-start')};
  justify-content: space-between;

  @media (max-width: ${MAX_WIDTH}px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const Left = styled.div`
  flex-grow: 1;
  padding-right: 15px;
`;

export const Right = styled.div`
  flex-shrink: 0;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (max-width: ${MAX_WIDTH}px) {
    padding-left: 7px;
    margin-bottom: 25px;
  }
`;
