import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'

const defaultMsg = {
    powerList: [
        { title: '点评作业：拥有个人点评页，可以为学生作业进行点评' },
        { title: '代课老师：拥有审核点评老师内容的权限，包括撤回点评，自行点评' }
    ],
    seltedStaff: [], //点击树选择出的员工
    blocResult: [0],
    blockStaff: [],//部门员工
    toPowerStaff: [], //点击的员工
    powerStaff: [] //左侧添加权限的员工
}

function powerDetail(state = defaultMsg, action) {
    switch (action.type) {
        case `${ActionTypes.ADD_SELTED_STAFF}`: {
            return {
                ...state, seltedStaff: action.id
            }
        }
        case `${ActionTypes.ADD_TO_POWER}`: {
            const newToPowerStaff = state.toPowerStaff
            if (newToPowerStaff.length == 0) {
                newToPowerStaff.push(action.data)
            }
            if (newToPowerStaff.length > 0) {
                for (let i = 0; i < newToPowerStaff.length; i++) {
                    if (newToPowerStaff[i].id === action.data.id) {
                        newToPowerStaff.splice(i, 1)
                    }
                }
                newToPowerStaff.push(action.data)
            }
            return {
                ...state, toPowerStaff: newToPowerStaff
            }
        }
        case `${ActionTypes.COMMIT_SELTED}`: {
            const newToPowerStaff = state.toPowerStaff
            let newPowerStaff = state.powerStaff
            newPowerStaff = newToPowerStaff
            return {
                ...state, powerStaff: newPowerStaff
            }
        }
        default: return state
    }
}


function bloc(state = {
    0: { id: 0, name: '所有部门', bloc: [1] },
    1: { id: 1, name: '爱启迪集团', bloc: [1000] },
    1000: { id: 1000, name: '广东分公司', bloc: [2000, 2001, 2002, 2003] },
    2000: { id: 2000, name: '产品研发组', bloc: [3000, 3001, 3002] },
    2001: { id: 2001, name: '总经办' },
    2002: { id: 2002, name: '财务部' },
    2003: { id: 2003, name: '工程部' },
    3000: { id: 3000, name: '开发一组', numbers: [4000, 4001, 4002] },
    3001: { id: 3001, name: '开发二组' },
    3002: { id: 3002, name: '测试组' }
}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function person(state = {
    4000: { id: 4000, name: '白帆' },
    4001: { id: 4001, name: '王鹏' },
    4002: { id: 4002, name: '王鹏3' }
}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function filterOption(state = null, action) {
    switch (action.type) {
      case `${ActionTypes.SEARCH_STAFF_LIST_BY_OPTION}`:
        return action.params
      default:
        return state
    }
}
  
function powerDepartment(state = defaultMsg, action) {
    switch (action.type) {
      
        default: {
            return state
        }
    }
}

const homeworkPower = combineReducers({
    powerDetail,
    powerDepartment,
    bloc,
    person,
    filterOption
})

export default homeworkPower