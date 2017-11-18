import styled from 'react-emotion';
import COLORS from 'src/styles/COLORS';

const DEFAULT_SIZE = 10;
const DEFAULT_WIDTH = 2;

export default styled.span`
  border-left: ${p => p.width || DEFAULT_WIDTH}px solid;
  border-bottom: ${p => p.width || DEFAULT_WIDTH}px solid;
  border-color: ${p => p.color || COLORS.FOREGROUND};
  transform: rotate(-45deg);
  display: inline-block;
  vertical-align: middle;
  width: ${p => p.size || DEFAULT_SIZE}px;
  height: ${p => Math.round((p.size || DEFAULT_SIZE) * 0.5)}px;
  transition: border-color 150ms;
`;
