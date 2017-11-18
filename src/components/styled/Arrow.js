import styled from 'react-emotion';
import COLORS from 'src/styles/COLORS';

export default styled.span`
  border-left: ${p => p.size || 4}px solid transparent;
  border-right: ${p => p.size || 4}px solid transparent;
  border-top: ${p => p.size || 4}px solid ${COLORS.FOREGROUND};
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  transition: border-color 150ms;
`;

export const DoubleArrow = styled.span`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  .arrow:first-child {
    transform: rotate(180deg);
  }

  .arrow:last-child {
    transform: none;
    margin-top: 2px;
  }
`;
