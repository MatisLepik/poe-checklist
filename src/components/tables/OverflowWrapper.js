import React from 'react';

export default ({ children, minWidth }) => (
  <div
    data-test="overflow-wrapper"
    css={`
  overflow-x: auto;
  max-width: 100%;
`}
  >
    <div css={`min-width: ${minWidth || 0}px;`}>{children}</div>
  </div>
);
