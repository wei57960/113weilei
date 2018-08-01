import * as ActionTypes from '../const/ActionTypes'

export function getUserInfo(mid) {
    return {
      SERVER_API: {
        type: ActionTypes.GET_USER_INFO,
        endpoint: '/getUserInfo',
        params: {
          mid
        }
      }
    }
  }
  
  export function getLessonInfo(mid) {
    return {
      SERVER_API: {
        type: ActionTypes.GET_LESSON_INFO,
        endpoint: '/getLessonInfo',
        params: {
          mid
        }
      }
    }
  }