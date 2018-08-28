import { combineReducers } from 'redux';
import * as ActionTypes from '../const/ActionTypes';

function myMusicList(state = [], action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_MY_MUSIC}_SUC`: {
      const finalResult = action.response.myMusic.result;
      return finalResult;
    }
    case `${ActionTypes.DELETE_MUSIC}`: {
      const delArr = action.data;
      const newMyMusic = state.slice();
      for (let i = 0; i < delArr.length; i++) {
        const index = newMyMusic.indexOf(delArr[i]);
        if (index > -1) {
          newMyMusic.splice(index, 1);
        }
      }
      return newMyMusic;
    }
    default:
      return state;
  }
}

function commendMusicList(state = [], action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_COMMEND_MUSIC}_SUC`: {
      const finalResult = action.response.commendMusic.result;
      return finalResult;
    }
    default:
      return state;
  }
}

const musicList = combineReducers({
  myMusicList,
  commendMusicList
});

export default musicList;
