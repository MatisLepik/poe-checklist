/* @flow */
import Arrow, { DoubleArrow } from 'src/components/styled/Arrow';
import COLORS from 'src/styles/COLORS';
import ContentRow, {
  rowStyles,
  genericCell,
} from 'src/components/tables/ContentRow';
import OverflowWrapper from 'src/components/tables/OverflowWrapper';
import React from 'react';
import styled, { css } from 'react-emotion';

export type Props = {
  data: Array<Object>,
  cols: Array<Object>,
};

const clickableHeading = css`
  cursor: pointer;
  transition: color 150ms;
  user-select: none;

  :hover {
    color: ${COLORS.LINK};
  }

  :hover .arrow {
    border-top-color: ${COLORS.LINK};
  }
`;

const HeadingCell = styled.td`
  ${genericCell};
  width: ${props => (props.isMain ? '100%' : 'auto')}
  font-weight: 700;
  white-space: nowrap;
`;

const HeadingCellClickableArea = styled.div`
  ${props => (props.isClickable ? clickableHeading : '')};
  color: ${props => (props.isSorting ? COLORS.LINK : 'inherit')};
  display: inline-flex;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: inherit;

  .arrow {
    transform: ${props =>
      props.isSorting && props.sortOrder === 'asc' ? 'rotate(180deg)' : 'none'};
    border-top-color: ${props =>
      props.isSorting ? COLORS.LINK : COLORS.FOREGROUND};
  }
`;

const Table = styled.table`
  width: 100%;
`;

const HeadingRow = styled.tr(rowStyles);

export class DataTable extends React.Component {
  props: Props;

  handleHeadingClick = col =>
    this.props.onHeadingClick &&
    col.isSortable &&
    this.props.onHeadingClick(col.key);

  renderHeadingName = col => {
    const { name, ...passThrough } = col;

    if (typeof name === 'function') {
      if (name.prototype && name.prototype.isReactComponent) {
        return React.createElement(name, passThrough);
      }
      return name(passThrough);
    }

    return name;
  };

  render() {
    const { data, cols, renderEmpty, mainCol, sortKey, sortOrder } = this.props;

    return (
      <OverflowWrapper minWidth={this.props.minWidth}>
        <Table>
          <thead>
            <HeadingRow>
              {cols.map((col, i) => (
                <HeadingCell
                  isMain={col.key === mainCol}
                  key={col.name || i}
                  className={col.className}
                >
                  <HeadingCellClickableArea
                    isSorting={col.key === sortKey}
                    sortOrder={sortOrder}
                    onClick={() => this.handleHeadingClick(col)}
                    isClickable={col.isSortable}
                    className={col.headingClass}
                  >
                    {this.renderHeadingName(col)}
                    {col.isSortable &&
                      (col.key === this.props.sortKey ? (
                        <Arrow
                          className="arrow"
                          css={`
                            margin-left: 5px;
                          `}
                        />
                      ) : (
                        <DoubleArrow>
                          <Arrow
                            className="arrow"
                            css={`
                              margin-left: 5px;
                            `}
                          />
                          <Arrow
                            className="arrow"
                            css={`
                              margin-left: 5px;
                            `}
                          />
                        </DoubleArrow>
                      ))}
                  </HeadingCellClickableArea>
                </HeadingCell>
              ))}
            </HeadingRow>
          </thead>

          <tbody>
            {data.map(row => (
              <ContentRow
                key={row.id}
                row={row}
                cols={cols}
                onClick={this.props.onRowClick}
                className={this.props.contentRowClass}
                defaultValue={this.props.defaultValue}
              />
            ))}
          </tbody>

          {data.length === 0 &&
            renderEmpty && (
              <tfoot>
                <tr>
                  <td colSpan={cols.length}>{this.props.renderEmpty()}</td>
                </tr>
              </tfoot>
            )}
        </Table>
      </OverflowWrapper>
    );
  }
}

export default DataTable;
