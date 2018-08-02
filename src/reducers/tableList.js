import './index.css'
import * as ActionTypes from '../const/ActionTypes'
const defaultMsgs = {
    learningCourse: [
    ],
    dataSource: [
    ],
    satisfiledList: []
}

export default function tableList(state = defaultMsgs, action) {
    switch (action.type) {
        case `${ActionTypes.GET_LESSON_INFO}_SUC`: {
            let a = state.learningCourse.slice()
            a = action.response.data.currentLessonsList
            let newa = a.map((item, index) => {
                return {
                    key: index + 1,
                    className: item.classInfo.name,
                    status: item.status ? '进行中' : '结束',
                    startTime: item.startTime,
                    nick: item.teacherInfo.nick,
                    enterRate: item.enterRate,
                    homeworkSubmitRate: item.homeworkSubmitRate,
                    beCommenttedRate: item.beCommenttedRate,
                    signRate: item.signRate,
                    satisfyRate: item.satisfyRate
                }
            })

            let b = state.dataSource.slice()
            b = action.response.data.historyLessonsList
            let newb = b.map((item, index) => {
                return {
                    key: index + 1,
                    className: item.classInfo.name,
                    status: item.status ? '进行中' : '结束',
                    startTime: item.startTime,
                    nick: item.teacherInfo.nick,
                    enterRate: item.enterRate,
                    homeworkSubmitRate: item.homeworkSubmitRate,
                    beCommenttedRate: item.beCommenttedRate,
                    signRate: item.signRate,
                    satisfyRate: item.satisfyRate
                }
            })
            return { ...state, learningCourse: newa, dataSource: newb }
        }

        case `${ActionTypes.GET_SATI_LIST}_SUC`: {
            let satisfiledList = state.satisfiledList.slice();
            satisfiledList = action.response.data.list
            let newsatisfiledList = satisfiledList.map((item, index) => {
                return {
                    key: index + 1,
                    course_name: item.course_name,
                    time: item.time,
                    nick: item.teacher_info.nick,
                    satisfied_score: item.satisfied_score,
                    satisfied_detail: item.satisfied_detail,
                    reply_status: item.reply_status ? '已回复' : '待回复'
                }
            }
            )
            return { ...state, satisfiledList: newsatisfiledList }
        }

        default:
            return state
    }
}