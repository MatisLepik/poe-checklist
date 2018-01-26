/* @flow */
import React from 'react';
import styled from 'react-emotion';
import COLORS from 'src/styles/COLORS';
import MapPictureModal from 'src/components/modals/MapPictureModal';
import { getPublicUrl } from 'src/utils/urls';
import fileNamify from 'src/utils/fileNamify';

export type Props = {};

const SvgWrapper = styled.div`
  padding: 0 10px;
  height: 50px;
  display: table-cell;
  vertical-align: middle;

  &:hover svg {
    transform: scale(1.2);
  }

  &:hover svg g {
    fill: ${COLORS.FOREGROUND_HIGHLIGHT};
  }
`;

const Svg = styled.svg`
  width: 28px;
  height: auto;
  display: block;
  transition: transform 150ms;

  g {
    transition: fill 150ms;
  }
`;

export default class PictureThumbnail extends React.Component {
  props: Props;

  state = {
    isOpen: false,
  };

  handleModalToggle = () =>
    this.setState(oldState => ({ ...oldState, isOpen: !oldState.isOpen }));

  handleModalClose = () => this.setState({ isOpen: false });

  handleSvgClick = evt => {
    evt.stopPropagation();
    this.handleModalToggle();
  };

  render() {
    const fileName = this.props.zoneName
      ? fileNamify(this.props.zoneName)
      : fileNamify(this.props.name);

    if (!__MAP_PICTURES__[fileName]) return null;

    return [
      <SvgWrapper key="1" onClick={this.handleSvgClick}>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
          <g fill="#A38D6D">
            <path d="M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 44H2V8h54v42z" />
            <path d="M16 28.138a5.575 5.575 0 0 0 5.569-5.568c0-3.072-2.498-5.57-5.569-5.57s-5.569 2.498-5.569 5.569A5.575 5.575 0 0 0 16 28.138zM16 19c1.968 0 3.569 1.602 3.569 3.569S17.968 26.138 16 26.138s-3.569-1.601-3.569-3.568S14.032 19 16 19zM7 46c.234 0 .47-.082.66-.249l16.313-14.362L34.275 41.69a.999.999 0 1 0 1.414-1.414l-4.807-4.807 9.181-10.054 11.261 10.323a1 1 0 0 0 1.351-1.475l-12-11a1.031 1.031 0 0 0-.72-.262 1.002 1.002 0 0 0-.694.325l-9.794 10.727-4.743-4.743a1 1 0 0 0-1.368-.044L6.339 44.249A1 1 0 0 0 7 46z" />
          </g>
        </Svg>
      </SvgWrapper>,
      this.state.isOpen && (
        <MapPictureModal
          key="2"
          isOpen={this.state.isOpen}
          onClose={this.handleModalClose}
          src={getPublicUrl(`maps/${fileName}`)}
        />
      ),
    ];
  }
}
