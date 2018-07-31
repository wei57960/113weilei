import axios from 'axios';
import { GET_USER_INFO_SUC, GET_USER_INFO_REQ, GET_USER_INFO_FAI ,
    GET_LESSON_INFO_SUC,GET_LESSON_INFO_REQ,GET_LESSON_INFO_FAI,} from '../const/ActionTypes'
export function getUserInfo(mid, next) {
    next({
        type: GET_USER_INFO_REQ
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
        // console.log(res);
        next({
            type: GET_USER_INFO_SUC,
            data: res.data
        });
    })
        .catch(err => {
            console.log(err);
            next({
                type: GET_USER_INFO_FAI
            });
        });
}

export function getLessonInfo(mid ,next){
    next({
        type: GET_LESSON_INFO_REQ
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
        // console.log(res.data.currentLessonsList);
        next({
            type: GET_LESSON_INFO_SUC,
            data: res.data
        });
    })
        .catch(err => {
            console.log(err);
            next({
                type: GET_LESSON_INFO_FAI
            });
        });
}