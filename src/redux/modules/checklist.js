/* @flow */
const CHECK_ITEM = 'redux/checklist/CHECK_ITEM';
const CLEAR_LIST = 'redux/checklist/CLEAR_LIST';
const UPDATE_VERSION = 'redux/checklist/UPDATE_VERSION';

export const CHECKABLE = {
  MAP: 'MAP',
  PASSIVE: 'PASSIVE',
  TRIAL: 'TRIAL',
  PANTHEON: 'PANTHEON',
};

const initialState = {
  versions: {
    [CHECKABLE.MAP]: 2.1,
    [CHECKABLE.PASSIVE]: 1,
    [CHECKABLE.TRIAL]: 1,
    [CHECKABLE.PANTHEON]: 2,
  },
};

export default function reducer(
  state: Object = initialState,
  action: Object = {}
) {
  switch (action.type) {
    case CLEAR_LIST: {
      return {
        ...state,
        [action.checkable]: {},
      };
    }
    case UPDATE_VERSION:
      return {
        ...state,
        [action.checkable]: {},
        versions: {
          ...state.versions,
          [action.checkable]: action.version,
        },
      };
    case CHECK_ITEM: {
      if (!action.checkable || action.id == null) {
        console.warn('Invalid payload passed to CHECK_ITEM:', action);
        return;
      }

      const oldValue = (state[action.checkable] || {})[action.id];

      return {
        ...state,
        [action.checkable]: {
          ...(state[action.checkable] || {}),
          [action.id]: typeof oldValue === 'boolean' ? !oldValue : true,
        },
      };
    }
    default:
      return state;
  }
}

/**
 * If the versions in the initialState get removed, this will dispatch an action
 * that updates the cached version and deletes the existing checklist data.
 * Only bump this if there is a breaking change (such as 3.1 atlas rework)
 */
export function validateVersion() {
  return (dispatch, getState) => {
    const versions = getState().checklist.versions || {};

    Object.values(CHECKABLE).forEach(checkable => {
      const cachedVersion = versions[checkable] || 1;
      const currentVersion = initialState.versions[checkable];
      if (currentVersion !== cachedVersion) {
        dispatch({
          type: UPDATE_VERSION,
          checkable,
          version: currentVersion,
        });
      }
    });
  };
}

export function checkItem(checkable: string, id: number) {
  return {
    type: CHECK_ITEM,
    checkable,
    id,
  };
}

export function clearList(checkable: string) {
  return {
    type: CLEAR_LIST,
    checkable,
  };
}
