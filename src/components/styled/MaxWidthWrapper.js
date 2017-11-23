import styled from 'react-emotion';
import SIZES from 'src/styles/SIZES';

export default styled.div`
  margin: 0 auto;
  max-width: ${SIZES.MAX_WIDTH}px;
  padding-left: 15px;
  padding-right: 15px;
  height: 100%;

  @media (max-width: 991px) {
    padding-left: 7px;
    padding-right: 7px;
  }
`;
