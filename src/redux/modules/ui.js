/* @flow */
const SET_UI = 'redux/ui/SET_UI';
const TOGGLE_DRAWER = 'redux/ui/TOGGLE_DRAWER';

const initialState = {
  drawers: {
    essences: true,
  },
  notes: {
    defaultValue: '',
  },
};

export default function reducer(
  state: Object = initialState,
  action: Object = {}
) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawers: {
          ...state.drawers,
          [action.name]: !state.drawers[action.name],
        },
      };
    case SET_UI:
      return {
        ...state,
        ...action.state,
      };
    default:
      return state;
  }
}

export function setUI(state: Object) {
  return {
    type: SET_UI,
    state,
  };
}

export function toggleDrawer(name: string) {
  return {
    type: TOGGLE_DRAWER,
    name,
  };
}
