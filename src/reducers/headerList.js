const defaultHeaderMsgs = {
    Items: {
        class:'三班人',
        number:'MID330900002',
        course:'摄影课，绘画课',
        startTime: '2018-03-30',
        historicalDays:'987',
        learningDays:'867',
        lastTime:'2018-03-30',
    }
}

export default function headerList(state = defaultHeaderMsgs, action) {
    switch (action.type) {
        default:
            return state
    }
}