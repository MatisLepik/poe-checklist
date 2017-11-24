/* @flow */
import { rgba } from 'polished';
import COLORS from 'src/styles/COLORS';
import MarkdownEditor from 'src/components/editor/MarkdownEditor';
import Panel from 'src/components/styled/Panel';
import React from 'react';
import styled, { css } from 'react-emotion';

export type Props = {};

const panelStyles = css`
  position: absolute;
  bottom: 100%;
  right: 0;
  width: 100%;
  background-color: ${rgba(COLORS.BACKGROUND_PANEL, 0.98)};
`;

const Wrapper = styled.div`
  padding-right: 15px;
  height: 100%;
  text-align: left;
  cursor: auto;
  text-transform: none;
  font-size: 16px;
`;

export default class Notes extends React.Component {
  props: Props;

  state = {
    value: '',
  };

  handlePanelClick = evt => evt.stopPropagation();

  handleChange = value => this.setState({ value });

  render() {
    return (
      <Wrapper data-test="notes" className={this.props.className}>
        <Panel
          onClick={this.handlePanelClick}
          data-test="panel"
          css={panelStyles}
        >
          <MarkdownEditor
            placeholder="Notes written here will be saved in the browser."
            autoSave="notes-text"
          />
        </Panel>
      </Wrapper>
    );
  }
}
