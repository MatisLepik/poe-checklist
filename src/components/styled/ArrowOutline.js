import styled from 'react-emotion';
import COLORS from 'src/styles/COLORS';

const resolveRotation = direction => {
  switch ((direction || '').toLowerCase()) {
    case 'top':
      return -45;
    case 'right':
      return 45;
    case 'bottom':
      return 135;
    case 'left':
      return -135;
    default:
      return 45;
  }
};

export default styled.span`
  border-right: ${p => p.width || 2}px solid ${COLORS.FOREGROUND};
  border-top: ${p => p.width || 2}px solid ${COLORS.FOREGROUND};
  display: inline-block;
  vertical-align: middle;
  width: ${p => p.size || 10}px;
  height: ${p => p.size || 10}px;
  transition: border-color 150ms, transform 50ms;
  transform: rotate(${p => resolveRotation(p.direction)}deg);
`;
