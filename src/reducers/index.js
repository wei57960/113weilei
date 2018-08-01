import { combineReducers } from 'redux';
import headerList from './headerList'
import tableList from './tableList'
import studentList from './studentList'
import classDetail from './classDetail'

export default combineReducers({
    headerList,
    tableList,
    studentList,
    classDetail
});