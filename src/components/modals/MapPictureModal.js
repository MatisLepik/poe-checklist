/* @flow */
import React from 'react';
import Modal from 'src/components/modals/Modal';
import styled, { css } from 'react-emotion';

export type Props = {};

const Img = styled.img`
  /* object-fit: contain; */
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

export default class MapPictureModal extends React.Component {
  props: Props;

  render() {
    const { src, ...rest } = this.props;
    return (
      <Modal {...rest} className={modalStyles}>
        <Img src={src} alt="Map" />
      </Modal>
    );
  }
}
