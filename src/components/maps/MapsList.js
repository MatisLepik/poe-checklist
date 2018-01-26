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
import PictureThumbnail from 'src/components/maps/PictureThumbnail';
import NumberCell from 'src/components/tables/NumberCell';
import React from 'react';
import sortableList from 'src/hoc/sortableList';
import TableCheck from 'src/components/TableCheck';
import ClearTable from 'src/components/tables/ClearTable';

export type Props = {};

export class MapList extends React.Component {
  props: Props;

  handleRowClick = row => {
    this.props.onCheck(CHECKABLE.MAP, row.id);
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
            No maps to show. If you completed them all - congratulations!<br />
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
      <TableCheck id={row.id} value={row.isChecked} checkable={CHECKABLE.MAP} />
    );
  };

  renderClearTable = col => (
    <ClearTable name="maps" onClear={this.props.onClear} />
  );

  render() {
    return (
      <DataTable
        minWidth={570}
        onRowClick={this.handleRowClick}
        mainCol="name"
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
            name: 'Tier',
            key: 'tier',
            className: 'text-center',
            component: NumberCell,
            isSortable: true,
          },
          {
            name: 'Pic',
            key: 'picture',
            component: PictureThumbnail,
            className: 'text-center',
            headingClass: css`
              justify-content: center;
              align-items: center;
            `,
            isSortable: false,
          },
          {
            name: 'Map',
            key: 'name',
            component: MapName,
            isSortable: true,
          },
          {
            name: 'Sextants',
            key: 'sextantCoverageIncludingSelf',
            className: 'text-center',
            isSortable: true,
          },
          {
            name: 'Level',
            key: 'level',
            className: 'text-center',
            isSortable: true,
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
  checkableList({ checkable: CHECKABLE.MAP }),
  filterableList({
    pool: FILTER_POOLS.MAPS,
    filter: (map, filters) => {
      if (filters.hideCheckedMaps && map.isChecked) return false;
      if (filters.hideNonAtlasMaps && !map.isOnAtlas) return false;
      if (filters.hideUniques && map.isUnique) return false;
      if (
        filters.hidePreWarForAtlasMaps &&
        (typeof map.releaseVersion !== 'number' || map.releaseVersion < 3.1)
      )
        return false;

      return true;
    },
  }),
  sortableList({
    sort: {
      persist: 'maps-list',
      keys: {
        name: SORT_STRATEGIES.ALPHABETIC,
        tier: SORT_STRATEGIES.NUMERIC,
        sextantCoverageIncludingSelf: SORT_STRATEGIES.NUMERIC,
        level: SORT_STRATEGIES.NUMERIC,
      },
      defaultKey: 'level',
      defaultOrder: 'asc',
      fallbackSorters: [
        x => +x.level,
        x => +x.tier,
        x => x.name.toString().toLocaleLowerCase(),
      ],
    },
  })
)(MapList);
