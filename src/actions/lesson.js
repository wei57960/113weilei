import ActionTypes from '../const/ActionTypes'
import { normalize } from 'normalizr'
import * as schemes from '../schemes'

export default {
  fetchLessonInfo: (params) => {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_LESSON_INFO,
        endpoint: '/getLessonInfo',
        params: {
          mid: params.mid
        }
      },
      mid: params.mid
    }
  },
  fetchLessonSatisfiedInfo: (params) => {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_LESSON_SATISFIED_INFO,
        endpoint: '/getSatisfiledList',
        params: {
          mid: params.mid
        },
        normailzerFun: response => normalize(response.data, schemes.SATISFILEDLIST)
      },
      mid: params.mid
    }
  },
  replyUserFeedBack: (params) => {
    const { mid, time, lessonIndex } = params
    return {
      type: ActionTypes.REPLY_USER_FEED_BACK,
      params: { mid, lessonIndex, time }
    }
  }
}