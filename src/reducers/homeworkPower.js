import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'

const defaultMsg = {
    powerList: [
        { title: '点评作业：拥有个人点评页，可以为学生作业进行点评' },
        { title: '代课老师：拥有审核点评老师内容的权限，包括撤回点评，自行点评' }
    ],
    departmentMsg: {
        allDepartment: {
            company: 1,
            name: '所有部门'
        },
        company: {
            1: {
                id: 1,
                area: 1000,
                name: '爱启迪集团'
            }
        },
        area: { //地区
            1000: {
                id: 1000,
                department: 2000,
                name: '广东分公司',
            }
        },
        department: { //部门
            2000: {
                id: 2000,
                group: [3000, 3001, 3002],
                name: '产品研发组',
            },
            2001: {
                id: 2001,
                name: '总经办',
            },
            2002: {
                id: 2002,
                name: '财务部',
            },
            2003: {
                id: 2003,
                name: '工程部',
            }
        },
        group: { //小组
            3000: {
                id: 3000,
                name: '开发一组',
                staff: [4000, 4001, 4002]
            },
            3001: {
                id: 3001,
                name: '开发二组',
            },
            3002: {
                id: 3002,
                name: '测试组',
            }
        },
        staff: { //员工
            4000: {
                mid: 4000,
                name: '白帆'
            },
            4001: {
                mid: 4001,
                name: '王鹏'
            },
            4002: {
                mid: 4002,
                name: '王鹏3'
            }
        },
        seltedStaff: [] //选中的员工     
    },
}

function powerDetail(state = defaultMsg, action) {
    switch (action.type) {
        default: return state
    }

}

function powerDepartment(state = defaultMsg, action) {
    switch (action.type) {
        case `${ActionTypes.ADD_SELTED_STAFF}`: {
          console.log(action.mid)
            return {
                ...state,
            }
        }
        default: {
            return state
        }
    }
}
const homeworkPower = combineReducers({
    powerDetail,
    powerDepartment
})

export default homeworkPower