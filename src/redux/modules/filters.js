/* @flow */
import { transform } from 'transmutable';

export const FILTER_POOLS = {
  MAPS: 'maps',
  PASSIVES: 'passives',
  TRIALS: 'trials',
  PANTHEONS: 'pantheons',
};

const TOGGLE_FILTER = 'redux/filters/TOGGLE_FILTER';

const initialState = {
  maps: {
    hideUniques: false,
    hideNonAtlasMaps: false,
    hideCheckedMaps: false,
  },
  passives: {
    hideCheckedQuests: false,
  },
  trials: {
    hideChecked: false,
  },
  pantheons: {
    hideChecked: false,
  },
};

export default function reducer(
  state: Object = initialState,
  action: Object = {}
) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return transform(state, copy => {
        copy[action.pool][action.key] = !state[action.pool][action.key];
      });
    default:
      return state;
  }
}

export function toggleFilter(pool: string, key: string) {
  return {
    type: TOGGLE_FILTER,
    pool,
    key,
  };
}
