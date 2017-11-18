/* @flow */
import COLORS from 'src/styles/COLORS';
import React from 'react';
import styled, { css } from 'react-emotion';

export type Props = {};

export const rowStyles = css`border-top: 1px solid ${COLORS.BORDER_GRAY};`;

export const CONTENT_ROW_HEIGHT = 50;

export const genericCell = css`
  height: ${CONTENT_ROW_HEIGHT}px;
  vertical-align: middle;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 991px) {
    padding-left: 7px;
    padding-right: 7px;
  }
`;

const INTERACTABLE_TAGS = ['button', 'a', 'input', 'label'];

const BodyCell = styled.td`${genericCell};`;

const Row = styled.tr`
  ${rowStyles};
  transition: background-color 150ms, opacity 150ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export default class ContentRow extends React.Component {
  props: Props;

  renderBody = (row, col) => {
    const { render, component, ...colPassThrough } = col;

    const data = {
      col: colPassThrough,
      ...row,
    };

    if (render) {
      return col.render(data);
    }

    if (component) {
      return React.createElement(col.component, data);
    }

    return row[col.key] || col.defaultValue;
  };

  handleRowClick = evt => {
    // If user clicked on an interactable thing, we don't intercept
    if (
      INTERACTABLE_TAGS.includes(evt.target.tagName.toLowerCase()) ||
      INTERACTABLE_TAGS.includes(evt.target.parentElement.tagName.toLowerCase())
    )
      return;

    this.props.onClick && this.props.onClick(this.props.row);
  };

  render() {
    const { row, cols, className } = this.props;
    return (
      <Row
        key={row.id}
        onClick={this.handleRowClick}
        className={typeof className === 'function' ? className(row) : className}
      >
        {cols.map(col => (
          <BodyCell key={`${row.id}-${col.key}`} className={col.className}>
            {this.renderBody(row, col)}
          </BodyCell>
        ))}
      </Row>
    );
  }
}
