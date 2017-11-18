import { css } from 'react-emotion';

const common = css`cursor: pointer;`;

export const checkedListRowStyles = css`
  ${common};
  td {
    opacity: 0.3;
  }
`;

export const uncheckedListRowStyles = common;
