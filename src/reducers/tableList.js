import React from 'react'
import { Icon } from 'antd'
import './index.css'
import { GET_LESSON_INFO_SUC, GET_LESSON_INFO_REQ, GET_LESSON_INFO_FAI, } from '../const/ActionTypes'
import Item from 'antd/lib/list/Item';
// function handleNumbers(text, type) {
//     if (type === 'f') {
//         console.log(text)
//         let num1 = parseInt(text.split("/")[0], 10);
//         let num2 = parseInt(text.split("/")[1], 10);
//         const num = num1 / num2
//         if (num < 0.8) {
//             return <span className='Red'>text</span>
//         } else if (num > 0.95) {
//             return <span className='Orange'>text</span>
//         } else {
//             return <span>text</span>
//         }
//     }
//     else if (type === 'percent') {
//         let res = parseInt(text);
//         if (res < 80) {
//             return <span className='Red'>{text}</span>
//         } else if (res > 95) {
//             return <span className='Orange'>{text}</span>
//         } else {
//             return <span>{text}</span>
//         }
//     }
// }

const defaultMsgs = {
    learningCourse: [
      
    ],

    dataSource: [
      
    ],

    columns: [{
        title: '班级',
        dataIndex: 'className',
        key: 'className',
        render: (text) => {
            return (<span> <Icon type="exclamation-circle" />{text}</span>)
        }
    }, {
        title: '课程状态',
        dataIndex: 'status',
        key: 'status',
    }, {
        title: '开课时间',
        dataIndex: 'startTime',
        key: 'startTime',
    }, {
        title: '老师',
        dataIndex: 'nick',
        key: 'nick',
        render: (text) => {
            return (<span><Icon type="user" />{text}</span>)
        }
    }, {
        title: '上课率',
        dataIndex: 'enterRate',
        key: 'enterRate',
        render: text => {
            let num1 = parseInt(text.split("/")[0], 10);
            let num2 = parseInt(text.split("/")[1], 10);
            const num = num1 / num2
            if (num < 0.8) {
                return <span className='Red'>{text}</span>
            } else if (num > 0.95) {
                return <span className='Orange'>{text}</span>
            } else {
                return <span>{text}</span>
            }

        }
    }, {
        title: '作业提交率',
        dataIndex: 'homeworkSubmitRate',
        key: 'homeworkSubmitRate',
        render: text => {
            if (text < 0.8) {
                return <span className='Red'>{(text*100).toFixed(2)+'%'}</span>
            } else if (text > 0.95) {
                return <span className='Orange'>{(text*100).toFixed(2)+'%'}</span>
            } else {
                return <span>{(text*100).toFixed(2)+'%'}</span>
            }
        }
    }, {
        title: '被点评情况',
        dataIndex: 'beCommenttedRate',
        key: 'beCommenttedRate',
        render: text => {
            
            if (text < 0.8) {
                return <span className='Red'>{(text*100).toFixed(2)+'%'}</span>
            } else if (text > 0.95) {
                return <span className='Orange'>{(text*100).toFixed(2)+'%'}</span>
            } else {
                return <span>{(text*100).toFixed(2)+'%'}</span>
            }
        }
    }, {
        title: '打卡率',
        dataIndex: 'signRate',
        key: 'signRate',
        render: text => {
            let num1 = parseInt(text.split("/")[0], 10);
            let num2 = parseInt(text.split("/")[1], 10);
            const num = num1 / num2
            if (num < 0.8) {
                return <span className='Red'>{text}</span>
            } else if (num > 0.95) {
                return <span className='Orange'>{text}</span>
            } else {
                return <span>{text}</span>
            }
        }
    }, {
        title: '满意度',
        dataIndex: 'satisfyRate',
        key: 'satisfyRate',
        render: text => {
            if (text < 0.8) {
                return <span className='Red'>{(text*100).toFixed(2)+'%'}</span>
            } else if (text > 0.95) {
                return <span className='Orange'>{(text*100).toFixed(2)+'%'}</span>
            } else {
                return <span>{(text*100).toFixed(2)+'%'}</span>
            }
        }
    },]

}

export default function tableList(state = defaultMsgs, action) {
    switch (action.type) {
        case GET_LESSON_INFO_SUC: {
            let a = state.learningCourse.slice()
            a = action.data.data.currentLessonsList //currentLessonsList  historyLessonsList
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
            b = action.data.data.historyLessonsList
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
            console.log(a)
            return { ...state, learningCourse: newa, dataSource: newb }
        }
        default:
            return state
    }
}