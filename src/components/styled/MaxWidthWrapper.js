import styled from 'react-emotion';

export const MAX_WIDTH = 1080;

export default styled.div`
  margin: 0 auto;
  max-width: ${MAX_WIDTH}px;
  padding-left: 15px;
  padding-right: 15px;
  height: 100%;

  @media (max-width: 991px) {
    padding-left: 7px;
    padding-right: 7px;
  }
`;
