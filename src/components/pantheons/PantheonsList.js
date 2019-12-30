/* @flow */
import { CHECKABLE } from 'src/redux/modules/checklist';
import { compose } from 'redux';
import { css } from 'react-emotion';
import { FILTER_POOLS } from 'src/redux/modules/filters';
import { SORT_STRATEGIES } from 'src/hoc/sortableList';
import checkableList from 'src/hoc/checkableList';
import DataTable from 'src/components/tables/DataTable';
import {
  checkedListRowStyles,
  uncheckedListRowStyles,
} from 'src/styles/listRowStyles';
import filterableList from 'src/hoc/filterableList';
import MapName from 'src/components/maps/MapName';
import orderBy from 'lodash/orderBy';
import React from 'react';
import sortableList from 'src/hoc/sortableList';
import TableCheck from 'src/components/TableCheck';
import ClearTable from 'src/components/tables/ClearTable';
import styled from 'react-emotion';

export type Props = {};

const BossName = styled.div`
  font-size: 12px;
`;

export class PantheonsList extends React.Component {
  props: Props;

  handleRowClick = row => {
    this.props.onCheck(CHECKABLE.PANTHEON, row.id);
  };

  handleClearTable = () => {
    const shouldClear = window.confirm(
      'Are you sure you want to uncheck all rows? \nThis cannot be reversed.'
    );

    if (shouldClear) this.props.onClear();
  };

  renderEmpty() {
    return (
      <div
        css={`
          text-align: center;
          width: 100%;
        `}
      >
        <p>
          <i>
            No pantheons to show. If you completed them all - congratulations!
            <br />
            <br />
            <small>
              If you want to reset the table, press the X button in the top
              right corner of the table.
            </small>
          </i>
        </p>
      </div>
    );
  }

  renderCheck = row => {
    return (
      <TableCheck
        id={row.id}
        value={row.isChecked}
        checkable={CHECKABLE.PANTHEON}
      />
    );
  };

  renderEffects = row => (
    <div>
      {row.effects.map((effect, i) => (
        <div key={i}>{effect}</div>
      ))}
    </div>
  );

  renderMapName = row => {
    return (
      <div>
        {row.map && <MapName {...row.map} hideShaperOrbs />}
        <BossName>{row.bossName}</BossName>
      </div>
    );
  };

  renderClearTable = col => (
    <ClearTable name="pantheons" onClear={this.props.onClear} />
  );

  render() {
    const noWrap = css`
      white-space: nowrap;
    `;
    return (
      <DataTable
        onRowClick={this.handleRowClick}
        minWidth={660}
        mainCol="effects"
        onHeadingClick={this.props.onSort}
        data={this.props.list}
        sortKey={this.props.sortKey}
        sortOrder={this.props.sortOrder}
        renderEmpty={this.renderEmpty}
        contentRowClass={row =>
          row.isChecked ? checkedListRowStyles : uncheckedListRowStyles
        }
        cols={[
          {
            name: 'God',
            key: 'god',
            isSortable: true,
            className: noWrap,
          },
          {
            name: 'Upgrade',
            key: 'effects',
            render: this.renderEffects,
            isSortable: true,
            className: css`
              font-size: 14px;
            `,
          },
          {
            name: 'Boss',
            key: 'map',
            isSortable: true,
            className: noWrap,
            render: this.renderMapName,
          },
          {
            name: this.renderClearTable,
            className: 'text-center',
            headingClass: css`
              justify-content: center;
            `,
            render: this.renderCheck,
            isSortable: false,
          },
        ]}
      />
    );
  }
}

const MAP_SORT = (arr, sortBy, order, fallbackSorters): sortStrategyFunc =>
  orderBy(
    arr,
    [
      x => (x.map.name || '').toString().toLocaleLowerCase(),
      ...fallbackSorters,
    ],
    [order, ...fallbackSorters.map(() => 'asc')]
  );

export default compose(
  checkableList({ checkable: CHECKABLE.PANTHEON }),
  filterableList({
    pool: FILTER_POOLS.PANTHEONS,
    filter: (obj, filters) => {
      if (filters.hideChecked && obj.isChecked) return false;
      return true;
    },
  }),
  sortableList({
    sort: {
      persist: 'pantheons-list',
      keys: {
        god: SORT_STRATEGIES.ALPHABETIC,
        effects: SORT_STRATEGIES.ALPHABETIC,
        map: MAP_SORT,
      },
      defaultKey: 'god',
      defaultOrder: 'asc',
      fallbackSorters: [],
    },
  })
)(PantheonsList);
