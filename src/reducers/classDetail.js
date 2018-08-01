import * as ActionTypes from '../const/ActionTypes'
import { Icon } from 'antd'
import React from 'react'
const deaultClassDetail = {
    Item: [],
    Detail: [],
    colums: [
        {
            title: '课程内容',
            dataIndex: 'course_name',
            key: 'course_name'
        },
        {
            title: '上课时间',
            dataIndex: 'time',
            key: 'time'
        },
        {
            title: '上课情况',
            dataIndex: 'enter_status',
            key: 'enter_status',
            render: (text) => {
                if (text === '0')
                    return (<Icon type="close" />)
                else if (text === '1')
                    return (<Icon type="check" />)
                else if (text === '-1')
                    return (<Icon type="minus" />)
            }
        },
        {
            title: '作业提交情况',
            dataIndex: 'homework_status',
            key: 'homework_status'
        },
        {
            title: '被点评情况',
            dataIndex: 'review_status',
            key: 'review_status'
        },
        {
            title: '打卡情况',
            dataIndex: 'clockin_status',
            key: 'clockin_status'
        },
        {
            title: '满意度评分',
            dataIndex: 'satisfied_score',
            key: 'satisfied_score'
        },
    ]
}


export default function classDetail(state = deaultClassDetail, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CLASS_INFO}_SUC`: {
            // let a = state.Item.slice();
            // a = action.response.data.basic_info
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
             console.log(newc)

            return { ...state, Detail: newc }
        }

        default:
            return state
    }
}