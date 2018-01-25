/* @flow */
import React from 'react';
import styled, { css, keyframes } from 'react-emotion';

export type Props = {};

const anim = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

const zoomyBase = css`
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: ${anim} 1.8s infinite ease-in-out;
`;

const ZoomyDots = styled.div`
  ${zoomyBase};
  color: #ffffff;
  font-size: 6px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &::before,
  &::after {
    ${zoomyBase};
    content: '';
    position: absolute;
    top: 0;
  }

  &::before {
    left: -3.5em;
    animation-delay: -0.32s;
  }

  &::after {
    left: 3.5em;
  }
`;

export default class Spinner extends React.Component {
  props: Props;

  render() {
    return <ZoomyDots />;
  }
}
