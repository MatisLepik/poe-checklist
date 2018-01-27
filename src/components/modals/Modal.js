/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'react-emotion';
import CloseButton from 'src/components/modals/CloseButton';
import EventListener from 'react-event-listener';

export type Props = {
  isOpen: boolean,
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.75);
`;

const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

const closeButtonStyles = css`
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 4;
`;

const modalRoot = document.body;

export default class Modal extends React.Component {
  props: Props;

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  handleWrapperClick = evt => {
    evt.stopPropagation();
  };

  handleKeyDown = evt => {
    if (evt.key === 'Escape' || evt.keyCode === 27 || evt.which === 27)
      this.props.onClose();
  };

  render() {
    return ReactDOM.createPortal(
      <span onClick={this.handleWrapperClick} data-test="modal-portal-root">
        {this.props.isOpen && (
          <span
            onClick={this.props.onClose}
            css={`
              cursor: pointer;
            `}
          >
            <EventListener target="window" onKeyDown={this.handleKeyDown} />
            <Overlay data-test="modal-overlay" />
            <Content className={this.props.className} data-test="modal-content">
              {this.props.children}
            </Content>
            {!this.props.hideCloseBtn && (
              <CloseButton
                data-test="modal-close-btn"
                className={closeButtonStyles}
                onClick={this.props.onClose}
              />
            )}
          </span>
        )}
      </span>,
      this.el
    );
  }
}
