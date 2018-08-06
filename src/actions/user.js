import ActionTypes from '../const/ActionTypes'
import { normalize } from 'normalizr'
import * as schemes from '../schemes'

export default {
  fetchUserInfo: (params) => {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_USER_INFO,
        endpoint: '/getUserInfo',
        params: {
          mid: params.mid
        }
      },
      mid: params.mid
    }
  },
  fetchStudentList: (params) => {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_STUDENT_LIST,
        endpoint: '/getStudentList',
        params: {
        },
        normailzerFun: response => normalize(response.data, schemes.STUDENTLIST),
      },
    }
  },
  searchStudentListByOption: (params) => {
    const { keyName, value } = params
    return {
      type: ActionTypes.SEARCH_STUDENT_LIST_BY_OPTION,
      params: { keyName, value }
    }
  }
}