import { combineReducers } from 'redux';
import * as ActionTypes from '../const/ActionTypes';

function loginInfo(state = { token: null }, action) {
  switch (action.type) {
    case `${ActionTypes.LOGIN}_SUC`:
    {
      let newState = { ...state };
      newState = action.response.data;
      return newState;
    }
    default:
      return state;
  }
}

const login = combineReducers({
  loginInfo
});
export default login;
