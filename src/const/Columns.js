import React from 'react'
import { Icon } from 'antd'
import { Avatar } from 'antd';
import './Column.css'
export const classDetailColums = [
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
            if (text === 0) { return (<Icon className='iconClose' type="close" />) }
            else if (text === 1) { return (<Icon className='icon' type="check" />) }
            else if (text === -1) { return (<Icon className='icon' type="minus" />) }
        }
    },
    {
        title: '作业提交情况',
        dataIndex: 'homework_status',
        key: 'homework_status',
        render: (text) => {
            if (text === 0) { return (<Icon className='iconClose' type="close" />) }
            else if (text === 1) { return (<Icon className='icon' type="check" />) }
            else if (text === -1) { return (<Icon className='icon' type="minus" />) }
        }
    },
    {
        title: '被点评情况',
        dataIndex: 'review_status',
        key: 'review_status',
        render: (text) => {
            if (text === 0) { return (<Icon className='iconClose' type="close" />) }
            else if (text === 1) { return (<Icon className='icon' type="check" />) }
            else if (text === -1) { return (<Icon className='icon' type="minus" />) }
        }
    },
    {
        title: '打卡情况',
        dataIndex: 'clockin_status',
        key: 'clockin_status',
        render: (text) => {
            if (text === 0) { return (<Icon className='iconClose' type="close" />) }
            else if (text === 1) { return (<Icon className='icon' type="check" />) }
            else if (text === -1) { return (<Icon className='icon' type="minus" />) }
        }
    },
    {
        title: '满意度评分',
        dataIndex: 'satisfied_score',
        key: 'satisfied_score',
        render: (text) => {
            if (text < 5) { return (<div className='failFont'>{text}</div>) }
            else return (<div>{text}</div>)
        }
    },
]

export const studentListColums = [
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
        render: (text) => {
            if (Object.keys(text).length == 0) {
                return (<p className='no-text'>无</p>)
            }
            else return (text.join(' '))
        }
    }, {
        title: '负责老师',
        dataIndex: 'teachers',
        key: 'teachers',
        render: (text) => {
            if (Object.keys(text).length == 0) {
                return (<p className='no-text'>无</p>)
            }
            else return (text.join(' '))
        }
    },
]

export const TableListColums = [{
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
    render: (text) => {
        return handleNumbers(text, 'f')
    }

}, {
    title: '作业提交率',
    dataIndex: 'homeworkSubmitRate',
    key: 'homeworkSubmitRate',
    render: text => {
        return handleNumbers(text, 'p')
    }
}, {
    title: '被点评情况',
    dataIndex: 'beCommenttedRate',
    key: 'beCommenttedRate',
    render: text => {
        return handleNumbers(text, 'p')
    }
}, {
    title: '打卡率',
    dataIndex: 'signRate',
    key: 'signRate',
    render: text => {
        return handleNumbers(text, 'f')

    }
}, {
    title: '满意度',
    dataIndex: 'satisfyRate',
    key: 'satisfyRate',
    render: text => {
        return handleNumbers(text, 'p')
    }
},]

function handleNumbers(text, type) {
    if (type === 'f') {
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
    else if (type === 'p') {
        if (text < 0.8) {
            return <span className='Red'>{(text * 100).toFixed(2) + '%'}</span>
        } else if (text > 0.95) {
            return <span className='Orange'>{(text * 100).toFixed(2) + '%'}</span>
        } else {
            return <span>{(text * 100).toFixed(2) + '%'}</span>
        }
    }
}

export const satisfiledList = [{
    title: '教程',
    dataIndex: 'course_name',
    key: 'course_name'
}, {
    title: '开课时间',
    dataIndex: 'time',
    key: 'time',
}, {
    title: '老师',
    dataIndex: 'nick',
    key: 'nick',
    render: (text) => {
        return (<span><Icon type="user" />{text}</span>)
    }
}, {
    title: '满意度评分',
    dataIndex: 'satisfied_score',
    key: 'satisfied_score',

}, {
    title: '具体反馈',
    dataIndex: 'satisfied_detail',
    key: 'satisfied_detail',


}, {
    title: '操作',
    dataIndex: 'reply_status',
    key: 'reply_status',
    render: (text) => {
        return (<span >{text}<Icon type="mail" /></span>)
    }
}]