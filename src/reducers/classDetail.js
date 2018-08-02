import * as ActionTypes from '../const/ActionTypes'
const deaultClassDetail = {
    Item: {
        id:'',
    },
    Detail: [],
}
export default function classDetail(state = deaultClassDetail, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CLASS_INFO}_SUC`: {
            // let a = state.Item.slice();
            let a = action.response.data.basic_info
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
            return { ...state, Detail: newc, Item: a }
        }
        default:
            return state
    }
}