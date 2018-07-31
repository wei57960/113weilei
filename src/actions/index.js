import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes'
export function getUserInfo(mid, next) {
    next({
        type: `${ActionTypes.GET_USER_INFO}_REQ`
    });
    axios({
        method: 'post',
        url: `http://xly-wkop.xiaoniangao.cn/getUserInfo`,
        data: {
            mid: mid
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    ).then(res => {
        next({
            type: `${ActionTypes.GET_USER_INFO}_SUC`,
            data: res.data
        });
    })
        .catch(err => {
            console.log(err);
            next({
                type: `${ActionTypes.GET_USER_INFO}_FAI`
            });
        });
}

export function getLessonInfo(mid ,next){
    next({
        type: `${ActionTypes.GET_LESSON_INFO}_REQ`
    });
    axios({
        method: 'post',
        url: `http://xly-wkop.xiaoniangao.cn/getLessonInfo`,
        data: {
            mid: mid
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    ).then(res => {
        next({
            type: `${ActionTypes.GET_LESSON_INFO}_SUC`,
            data: res.data
        });
    })
        .catch(err => {
            console.log(err);
            next({
                type: `${ActionTypes.GET_LESSON_INFO}_FAI`
            });
        });
}