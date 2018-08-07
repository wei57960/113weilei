import ActionTypes from '../const/ActionTypes'
import { normalize } from 'normalizr'
import * as schemas from '../schemes'

export default {
  fetchClassInfo: (params) => {
    const { classId } = params
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_CLASS_INFO,
        endpoint: '/getClassInfo',
        params: {
          id: classId
        },
        normailzerFun: response => {
          const classList = normalize(response.data.list, schemas.COURSELIST)
          return {
            ...response.data,
            list: classList
          }
        }
      },
      classId
    }
  }
}