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

// We add some padding so the rotated arrow will still fall within the box that the span creates
export default styled.span`
  padding-left: 2px;
  padding-top: 2px;
  display: inline-block;
  vertical-align: middle;

  &::before {
    content: '';
    display: inline-block;
    border-right: ${p => p.width || 2}px solid ${COLORS.FOREGROUND};
    border-top: ${p => p.width || 2}px solid ${COLORS.FOREGROUND};
    width: ${p => p.size || 10}px;
    height: ${p => p.size || 10}px;
    transition: border-color 150ms, transform 50ms;
    transform: rotate(${p => resolveRotation(p.direction)}deg);
  }
`;
