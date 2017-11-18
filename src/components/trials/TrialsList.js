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
import { DIFFICULTIES } from 'src/data/TRIALS';
import filterableList from 'src/hoc/filterableList';
import NumberCell from 'src/components/tables/NumberCell';
import React from 'react';
import sortableList from 'src/hoc/sortableList';
import TableCheck from 'src/components/TableCheck';
import ClearTable from 'src/components/tables/ClearTable';

export type Props = {};

export class TrialsList extends React.Component {
  props: Props;

  handleRowClick = row => {
    this.props.onCheck(CHECKABLE.TRIAL, row.id);
  };

  renderEmpty() {
    return (
      <div css={`text-align: center; width: 100%;`}>
        <p>
          <i>
            No trials to show. If you completed them all - congratulations!<br />
            Otherwise, try disabling some of the filters.
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
        checkable={CHECKABLE.TRIAL}
      />
    );
  };

  renderZoneName = row =>
    `${row.zone} ${row.location ? `(${row.location})` : ''}`;

  renderClearTable = col => (
    <ClearTable name="trials" onClear={this.props.onClear} />
  );

  render() {
    return (
      <DataTable
        onRowClick={this.handleRowClick}
        minWidth={375}
        mainCol="zone"
        onHeadingClick={this.props.onSort}
        data={this.props.list}
        sortKey={this.props.sortKey}
        sortOrder={this.props.sortOrder}
        renderEmpty={this.renderEmpty}
        contentRowClass={row =>
          row.isChecked ? checkedListRowStyles : uncheckedListRowStyles}
        cols={[
          {
            name: 'Act',
            key: 'act',
            className: 'text-center',
            component: NumberCell,
            isSortable: true,
            defaultValue: '-',
          },
          {
            name: 'Zone',
            key: 'zone',
            render: this.renderZoneName,
            isSortable: true,
          },
          {
            name: 'Difficulty',
            key: 'difficulty',
            isSortable: true,
            className: 'text-center',
          },
          {
            name: this.renderClearTable,
            className: 'text-center',
            headingClass: css`justify-content: center;`,
            render: this.renderCheck,
            isSortable: false,
          },
        ]}
      />
    );
  }
}

export default compose(
  checkableList({ checkable: CHECKABLE.TRIAL }),
  filterableList({
    pool: FILTER_POOLS.TRIALS,
    filter: (trial, filters) => {
      if (filters.hideChecked && trial.isChecked) return false;
      if (filters.hideNormal && trial.difficulty === DIFFICULTIES.NORMAL)
        return false;
      if (filters.hideCruel && trial.difficulty === DIFFICULTIES.CRUEL)
        return false;
      if (filters.hideMerciless && trial.difficulty === DIFFICULTIES.MERCILESS)
        return false;
      if (filters.hideEternal && trial.difficulty === DIFFICULTIES.ETERNAL)
        return false;
      return true;
    },
  }),
  sortableList({
    sort: {
      persist: 'trials-list',
      keys: {
        act: SORT_STRATEGIES.NUMERIC,
        zone: SORT_STRATEGIES.ALPHABETIC,
        difficulty: SORT_STRATEGIES.ALPHABETIC,
        location: SORT_STRATEGIES.ALPHABETIC,
      },
      defaultKey: 'act',
      defaultOrder: 'asc',
      fallbackSorters: [
        x => +x.act,
        x => +x.zone.toString().toLocaleLowerCase(),
        x => x.location.toString().toLocaleLowerCase(),
      ],
    },
  })
)(TrialsList);
