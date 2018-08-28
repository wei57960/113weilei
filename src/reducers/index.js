import { combineReducers } from 'redux';
import login from './login';
import musicList from './musicList';
import entities from './entities';
import basic from './operation';

export default combineReducers({
  login,
  musicList,
  entities,
  basic
});
