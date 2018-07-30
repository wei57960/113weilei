
const defaultMsgs = {
    learningCourse: [{
        key: '1', class: '高级班', status: '进行中', startTime: '2017 - 04 - 20', teacher: '小白老师', startClass: '3 / 21',
        homework: '67.98 %', handle: '87.98 % ', flag: '3 / 21', smile: '90.14 %'
    }, {
        key: '2', class: '进阶班', status: '进行中', startTime: '2017 - 04 - 21', teacher: '小白老师', startClass: '5 / 21',
        homework: '76.89 %', handle: '31.87 % ', flag: '5 / 21', smile: '98.14 %'
    }, {
        key: '3', class: '提高班', status: '进行中', startTime: '2017 - 04 - 22', teacher: '小白老师', startClass: '13 / 21',
        homework: '13.98 %', handle: '21.76 % ', flag: '13 / 21', smile: '88.01 %'
    }, {
        key: '4', class: '入门班', status: '进行中', startTime: '2017 - 04 - 23', teacher: '小白老师', startClass: '20 / 21',
        homework: '98.45 %', handle: '98.67 % ', flag: '20 / 21', smile: '30.10 %'
    }, {
        key: '5', class: '体验班', status: '已结束', startTime: '2017 - 04 - 24', teacher: '小白老师', startClass: '21 / 21',
        homework: '31.54 %', handle: '78.76 % ', flag: '21 / 21', smile: '90.14 %'
    }],
    dataSource: [{
        key: '1', class: '高级班', status: '已结束', startTime: '2017-04-30', teacher: '小白老师',
        startClass: '21/21', homework: '8/10', handle: '10/10', flag: '5/21', smile: '90.00%'
    }],
    columns: [{
        title: '班级',
        dataIndex: 'class',
        key: 'class',
    }, {
        title: '课程状态',
        dataIndex: 'status',
        key: 'status',
    }, {
        title: '开课时间',
        dataIndex: 'startTime',
        key: 'startTime',
    }, {
        title: '教学组负责人',
        dataIndex: 'teacher',
        key: 'teacher',
    }, {
        title: '上课率',
        dataIndex: 'startClass',
        key: 'startClass',
    }, {
        title: '作业提交率',
        dataIndex: 'homework',
        key: 'homework',
    }, {
        title: '被点评情况',
        dataIndex: 'handle',
        key: 'handle',
    }, {
        title: '打卡率',
        dataIndex: 'flag',
        key: 'flag',
    }, {
        title: '满意度',
        dataIndex: 'smile',
        key: 'smile',
    },]
    // historicalData: {
    //     班级: '高级班', 课程状态: '已结束', 开课时间: '2017-4-30', 教学组责任人: '小白老师', 上课率: '21/21',
    //     作业提交率: '8/10', 被点评情况: '10/10', 打卡率: '5/21', 满意度: '90.00%'
    // },
}

export default function tableList(state = defaultMsgs, action) {
    switch (action.type) {
        default:
            return state
    }
}