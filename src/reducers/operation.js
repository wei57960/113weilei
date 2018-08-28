import { combineReducers } from 'redux';
import * as ActionTypes from '../const/ActionTypes';

function basicInfo(state = { selted: 'singleton', single: ' ', multi: [] }, action) {
  switch (action.type) {
    case (ActionTypes.SET_SELTED_STATUS):
      return { ...state, selted: action.data };
    case (ActionTypes.ADD_SINGLE_SELTED):
      return { ...state, single: action.data };
    case (ActionTypes.ADD_MULTIPLE_SELTED):
    {
      const copy = state.multi;
      const [...newmulti] = copy;
      const res = newmulti.indexOf(action.data);
      if (res < 0) {
        newmulti.push(action.data);
      } else {
        newmulti.splice(res, 1);
      }
      return { ...state, multi: newmulti };
    }
    case (ActionTypes.DELETE_REMAIN_MUSIC):
    {
      const newState = { ...state };
      return { newState, single: ' ', multi: [] };
    }
    default:
      return state;
  }
}

const basic = combineReducers({
  basicInfo
});
export default basic;
