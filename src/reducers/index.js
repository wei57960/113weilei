import { combineReducers } from 'redux';
import headerList from './headerList'
import tableList from './tableList'

export default combineReducers({
    headerList,
    tableList
});