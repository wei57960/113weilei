import * as ActionTypes from '../const/ActionTypes'
const deaultClassDetail = {
    Item: {
        name: '',
        id: '',
        realTeacherName: '',
        realTeacherId: '',
        realTeacherWechat: '',
        virtulTeacherName: '',
        virtulTeacherId: '',
        virtulTeacherWechat: ''
    },
    Detail: [],
}
export default function classDetail(state = deaultClassDetail, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CLASS_INFO}_SUC`: {
            console.log(action.response.data)
            let a = action.response.data.basic_info
            state.Item.name = a.name,
                state.Item.id = a.id,
                state.Item.realTeacherName = a.real_teacher.name,
                state.Item.realTeacherId = a.real_teacher.mid,
                state.Item.realTeacherWechat = a.real_teacher.wx_code,
                state.Item.virtulTeacherName = a.virtual_teacher.nick,
                state.Item.virtulTeacherId = a.virtual_teacher.id,
                state.Item.virtulTeacherWechat = a.virtual_teacher.wx_code
            let c = state.Detail.slice();
            c = action.response.data.list
            let newc = c.map((item, index) => {
                return {
                    key: index + 1,
                    course_name: item.course_name,
                    time: item.time,
                    enter_status: item.enter_status,
                    homework_status: item.homework_status,
                    review_status: item.review_status,
                    clockin_status: item.clockin_status,
                    satisfied_score: item.satisfied_score
                }
            }
            )
            return { ...state, Detail: newc }
        }
        default:
            return state
    }
}