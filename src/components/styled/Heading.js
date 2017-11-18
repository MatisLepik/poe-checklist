import styled, { css } from 'react-emotion';
import COLORS from 'src/styles/COLORS';

const styles = css`color: ${COLORS.FOREGROUND_HIGHLIGHT};`;

export const H1 = styled.h1(styles);
export const H2 = styled.h2(styles);
export const H3 = styled.h3(styles);
export const H4 = styled.h4(styles);
export const H5 = styled.h5(styles);
export const H6 = styled.h6(styles);
