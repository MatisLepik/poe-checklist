/* @flow */
import React from 'react';
import Modal from 'src/components/modals/Modal';
import styled, { css } from 'react-emotion';
import Spinner from 'src/components/Spinner';

export type Props = {};

const Img = styled.img`
  /* object-fit: contain; */
  transform: translateZ(0);
  max-width: 100%;
  max-height: 100%;
`;

const modalStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    pointer-events: auto;
  }
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export default class MapPictureModal extends React.Component {
  props: Props;

  render() {
    const { src, ...rest } = this.props;
    return (
      <Modal {...rest} className={modalStyles}>
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
        <Img src={`${process.env.PUBLIC_URL}${src}`} alt="Map" />
      </Modal>
    );
  }
}
