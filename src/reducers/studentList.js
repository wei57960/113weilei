import * as ActionTypes from '../const/ActionTypes'

const defaultStudentMsgs = {
    studentList: [],
    searchNumber: {},
    newstudentList: []
}

export default function studentList(state = defaultStudentMsgs, action) {
    switch (action.type) {
        case `${ActionTypes.GET_STUDENT_LIST}_SUC`: {
            let a = state.studentList.slice()
            a = action.response.data
            let newa = a.map((item, index) => {
                return {
                    key: index + 1,
                    hurl: item.hurl,
                    nick: item.nick,
                    mid: item.mid,
                    enter_time: item.enter_time,
                    start_time: item.start_time,
                    learning_lessons: item.learning_lessons,
                    teachers: item.teachers
                }
            }
            )
            return { ...state, studentList: newa }
        }
        case `${ActionTypes.GET_DETAIL_BY_ID}`: {
            let a = state.studentList.slice()
            let b = state.newstudentList.slice()

            let newa = a.filter((item, index) => {
                if (item.mid == action.mid) {
                    return item
                }
            })
            b = newa
            return { ...state, studentList: b }
        }
        default:
            return state
    }
}