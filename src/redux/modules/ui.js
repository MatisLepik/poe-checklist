/* @flow */
const SET_UI = 'redux/ui/SET_UI';

const initialState = {};

export default function reducer(
  state: Object = initialState,
  action: Object = {}
) {
  switch (action.type) {
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
