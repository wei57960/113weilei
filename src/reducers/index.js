import { combineReducers } from 'redux';
import list from './list';
import isActive from './isActive'

export default combineReducers({
    list,
    isActive
});