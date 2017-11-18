/* @flow */
import React from 'react';
import SimpleMDE from 'simplemde';
import styled from 'react-emotion';
import COLORS from 'src/styles/COLORS';
import 'simplemde/dist/simplemde.min.css';

export type Props = {};

const Wrapper = styled.div`
  .CodeMirror {
    height: 62vh;
  }

  .CodeMirror {
    background-color: transparent;
    color: ${COLORS.FOREGROUND};

    &-fullscreen {
      background-color: ${COLORS.BACKGROUND};
    }
  }

  .editor-toolbar.fullscreen {
    background-color: ${COLORS.BACKGROUND};

    &::before,
    &::after {
      display: none;
    }
  }

  .editor-preview {
    background-color: ${COLORS.BACKGROUND_PANEL};
  }

  .CodeMirror-cursor {
    border-color: ${COLORS.FOREGROUND};
  }

  .editor-toolbar a {
    color: ${COLORS.FOREGROUND} !important;
    transition: background-color 150ms;
    background-color: transparent !important;

    &.active,
    &:hover {
      background-color: rgba(0, 0, 0, 0.5) !important;
      border-color: ${COLORS.FOREGROUND} !important;
    }
  }

  .CodeMirror-scroll {
    cursor: text;
  }

  .editor-toolbar i.separator {
    border-color: ${COLORS.FOREGROUND};
    border-right: none;
  }

  .CodeMirror,
  .editor-toolbar {
    border-color: ${COLORS.BORDER_GRAY};
  }
`;

export default class MarkdownEditor extends React.Component {
  props: Props;

  static defaultProps = {
    autoDownloadFontAwesome: true,
    spellChecker: false,
    toolbar: [
      'bold',
      'italic',
      'heading',
      '|',
      'quote',
      'unordered-list',
      'ordered-list',
      '|',
      'link',
      'image',
      '|',
      'preview',
      'fullscreen',
    ],
  };

  componentDidMount() {
    const { autoSave, ...rest } = this.props;

    console.log('autoSave', autoSave);

    this.mde = new SimpleMDE({ ...rest, element: this.el });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper>
        <textarea ref={el => (this.el = el)} />
      </Wrapper>
    );
  }
}
