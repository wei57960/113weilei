import { combineReducers } from 'redux';
import * as ActionTypes from '../const/ActionTypes';

function myMusic(state = { }, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_MY_MUSIC}_SUC`:
      return { ...state, ...action.response.myMusic.entities.myMusic };
    case `${ActionTypes.RENAME_MUSIC}`:
      return {
        ...state,
        [action.data.id]: {
          ...state[action.data.id],
          name: action.data.musicName
        }
      };
    default:
      return state;
  }
}

function commendMusic(state = { }, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_COMMEND_MUSIC}_SUC`:
      return { ...state, ...action.response.commendMusic.entities.commendMusic };
    default:
      return state;
  }
}

export default combineReducers({
  myMusic,
  commendMusic
});
