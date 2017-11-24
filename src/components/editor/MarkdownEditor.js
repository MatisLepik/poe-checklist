/* @flow */
import React from 'react';
import SimpleMDE from 'simplemde';
import styled from 'react-emotion';
import COLORS from 'src/styles/COLORS';
import 'simplemde/dist/simplemde.min.css';
import SIZES from 'src/styles/SIZES';
import { connect } from 'react-redux';
import { setNotesValue } from 'src/redux/modules/ui';
import debounce from 'lodash/debounce';

export type Props = {};

const DEBOUNCE_SPEED = 200;

const Wrapper = styled.div`
  .CodeMirror {
    height: 564px;
    height: calc(
      100vh -
        ${SIZES.PAGE_CONTAINER_PADDING +
          SIZES.HEADER_HEIGHT +
          SIZES.DRAWER_HEIGHT * 2 +
          130}px
    );
  }

  .CodeMirror {
    background-color: transparent;
    color: ${COLORS.FOREGROUND};

    &-fullscreen {
      background-color: ${COLORS.BACKGROUND};
    }
  }

  hr {
    border-color: ${COLORS.BORDER_GRAY};
  }

  .CodeMirror-placeholder {
    opacity: 0.2;
    font-style: italic;
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

export class MarkdownEditor extends React.Component {
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

  save = () => {
    this.props.setNotesValue(this.mde.value());
  };

  handleKeyDown = (cm, evt) => {
    if (evt.key === 's' && evt.ctrlKey) {
      evt.preventDefault();
      this.save();
    }
  };

  componentDidMount() {
    const { autoSave, ...rest } = this.props;

    this.mde = new SimpleMDE({ ...rest, element: this.el });

    if (autoSave) {
      this.mde.codemirror.on(
        'change',
        debounce(() => {
          this.save();
        }, DEBOUNCE_SPEED)
      );

      this.mde.codemirror.on('blur', this.save);
      this.mde.codemirror.on('keydown', this.handleKeyDown);
    }
  }

  componentWillUnmount() {
    this.mde.toTextArea();
    this.mde = null;
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper>
        <textarea
          ref={el => (this.el = el)}
          defaultValue={this.props.defaultValue || ''}
        />
      </Wrapper>
    );
  }
}

export default connect(
  state => ({
    defaultValue: state.ui.notes.defaultValue,
  }),
  { setNotesValue }
)(MarkdownEditor);
