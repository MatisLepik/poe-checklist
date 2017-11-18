/* @flow */
const CHECK_ITEM = 'redux/checklist/CHECK_ITEM';
const CLEAR_LIST = 'redux/checklist/CLEAR_LIST';

const initialState = {};

export const CHECKABLE = {
  MAP: 'MAP',
  PASSIVE: 'PASSIVE',
  TRIAL: 'TRIAL',
  PANTHEON: 'PANTHEON',
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
