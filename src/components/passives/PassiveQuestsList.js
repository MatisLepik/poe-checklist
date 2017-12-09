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
import NumberCell from 'src/components/tables/NumberCell';
import PassiveQuestName from 'src/components/passives/PassiveQuestName';
import React from 'react';
import sortableList from 'src/hoc/sortableList';
import TableCheck from 'src/components/TableCheck';
import ClearTable from 'src/components/tables/ClearTable';
import styled from 'react-emotion';

export type Props = {};

const PreReq = styled.div`
  font-size: 12px;
  font-style: italic;
  margin-bottom: 4px;
`;

export class PassiveQuestsList extends React.Component {
  props: Props;

  handleRowClick = row => {
    this.props.onCheck(CHECKABLE.PASSIVE, row.id);
  };

  handleClearTable = () => {
    const shouldClear = window.confirm(
      'Are you sure you want to uncheck all rows? \nThis cannot be reversed.'
    );

    if (shouldClear) this.props.onClear();
  };

  renderEmpty() {
    return (
      <div css={`text-align: center; width: 100%;`}>
        <p>
          <i>
            No quests to show. If you completed them all - congratulations!<br
            />
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
        checkable={CHECKABLE.PASSIVE}
      />
    );
  };

  renderClearTable = col => (
    <ClearTable name="passive quests" onClear={this.props.onClear} />
  );

  renderObjective = col => {
    return (
      <div>
        {col.prerequisite && <PreReq>Prerequisite: {col.prerequisite}</PreReq>}
        {col.objective}
      </div>
    );
  };

  render() {
    return (
      <DataTable
        onRowClick={this.handleRowClick}
        minWidth={525}
        mainCol="objective"
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
            name: 'Act',
            key: 'act',
            isSortable: true,
            component: NumberCell,
            className: css`
              text-align: center;
            `,
          },
          {
            name: 'Quest',
            key: 'quest',
            component: PassiveQuestName,
            isSortable: true,
            className: css`
              white-space: nowrap;
            `,
          },
          {
            name: 'Objective',
            key: 'objective',
            isSortable: true,
            className: css`
              font-size: 14px;
            `,
            render: this.renderObjective,
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

export default compose(
  checkableList({ checkable: CHECKABLE.PASSIVE }),
  filterableList({
    pool: FILTER_POOLS.PASSIVES,
    filter: (quest, filters) => {
      if (filters.hideCheckedQuests && quest.isChecked) return false;
      return true;
    },
  }),
  sortableList({
    sort: {
      persist: 'passive-quests-list',
      keys: {
        quest: SORT_STRATEGIES.ALPHABETIC,
        act: SORT_STRATEGIES.NUMERIC,
        objective: SORT_STRATEGIES.ALPHABETIC,
      },
      defaultKey: 'act',
      defaultOrder: 'asc',
      fallbackSorters: [x => x.quest.toString().toLocaleLowerCase()],
    },
  })
)(PassiveQuestsList);
