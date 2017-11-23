/* @flow */
import SIZES from 'src/styles/SIZES';
import styled from 'react-emotion';

export const FlexWrapper = styled.div`
  display: flex;
  align-items: ${p => (p.centerVertically ? 'center' : 'flex-start')};
  justify-content: space-between;

  @media (max-width: ${p => p.maxWidth || SIZES.MAX_WIDTH}px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    ${p => p.onMobile || ''};

    > *:first-child {
      padding-right: 0;
    }

    > *:last-child {
      padding-left: 7px;
    }
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
`;
