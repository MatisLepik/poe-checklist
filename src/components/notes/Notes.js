/* @flow */
import React from 'react';
import styled, { css } from 'react-emotion';
import Panel from 'src/components/styled/Panel';
import Editor from 'src/components/editor/MarkdownEditor';

export type Props = {};

const panelStyles = css`
  width: 100%;
  height: 720px;
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
      <Wrapper data-test="notes">
        <Panel data-test="panel" css={panelStyles}>
          <Editor
            onChange={this.handleChange}
            value={this.state.value}
            initialValue="fred"
          />
        </Panel>
      </Wrapper>
    );
  }
}
