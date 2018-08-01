import * as ActionTypes from '../const/ActionTypes'
import React from 'react'
import { Avatar} from 'antd';
const defaultStudentMsgs = {
    studentList: [],
    columns: [
        {
            title: '',
            dataIndex: 'hurl',
            key: 'hurl',
            render: (text) => {
                return (<Avatar shape="square" style={{ width: '50px', height: '50px' }} src={text} />)
            }
        },
        {
            title: '学员名',
            dataIndex: 'mid',
            key: 'mid',
        }, {
            title: '学员编号/MID',
            dataIndex: 'nick',
            key: 'nick',
        }, {
            title: '入学时间',
            dataIndex: 'enter_time',
            key: 'enter_time',
        }, {
            title: '开课时间',
            dataIndex: 'start_time',
            key: 'start_time',
        }, {
            title: '在学课程',
            dataIndex: 'learning_lessons',
            key: 'learning_lessons',
        }, {
            title: '负责老师',
            dataIndex: 'teachers',
            key: 'teachers',
        },
    ]

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

        default:
            return state
    }
}