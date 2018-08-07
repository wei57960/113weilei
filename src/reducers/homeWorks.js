import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'

function homeWork(state = [], action) {
  switch (action.type) {
    case `${ActionTypes.FEACH_HOMEWORK_INFO}_SUC`:
      const result = action.response.result;
      // return { ...state, [action.id]: result }
      return [...result]
    default:
      return state
  }
}

function list(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FEACH_HOMEWORK_INFO}_SUC`:
      return { ...action.response.entities }
    default:
      return state
  }
}
const homeWorks = combineReducers({
  homeWork,
  list
})

export default homeWorks