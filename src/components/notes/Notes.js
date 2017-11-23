/* @flow */
import React from 'react';
import styled, { css } from 'react-emotion';
import Panel from 'src/components/styled/Panel';
import MarkdownEditor from 'src/components/editor/MarkdownEditor';

export type Props = {};

const panelStyles = css`
  width: 100%;
  position: sticky;
  top: 15px;
`;

const Wrapper = styled.div`
  width: 580px;
  padding-top: 40px;
  padding-right: 15px;
  position: relative;
  height: 100%;
`;

export default class Notes extends React.Component {
  props: Props;

  state = {
    value: '',
  };

  handleChange = value => this.setState({ value });

  render() {
    return (
      <Wrapper data-test="notes" className="notes">
        <Panel data-test="panel" css={panelStyles}>
          <MarkdownEditor
            placeholder="Notes written here will be saved in the browser."
            autoSave="notes-text"
          />
        </Panel>
      </Wrapper>
    );
  }
}
