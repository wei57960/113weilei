import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'

function list(state = {
  userUnReview: [],
  userReview: [],
  allUnreview: [],
  allReview: []
}, action) {
  switch (action.type) {
    case `${ActionTypes.FEACH_HOMEWORK_USER_UNREVIEW}_SUC`: {
      return {
        ...state,
        userUnReview: action.response.result
      }
    }
    case `${ActionTypes.FEACH_HOMEWORK_USER_REVIEW}_SUC`: {
      return {
        ...state,
        userReview: action.response.result
      }
    }
    case `${ActionTypes.FEACH_HOMEWORK_ALL_UNREVIEW}_SUC`: {
      return {
        ...state,
        allUnreview: action.response.result
      }
    }
    case `${ActionTypes.FEACH_HOMEWORK_ALL_REVIEW}_SUC`: {
      return {
        ...state,
        allReview: action.response.result
      }
    }
    default:
      return state;
  }
}

function homeworkList(state = {
  userUnReview: [],
  userReview: [],
  allUnreview: [],
  allReview: []
}, action) {
  switch (action.type) {
    case `${ActionTypes.FEACH_HOMEWORK_USER_UNREVIEW}_SUC`: {
      return {
        ...state,
        userUnReview: action.response.entities
      }
    }
    case `${ActionTypes.FEACH_HOMEWORK_USER_REVIEW}_SUC`: {
      return {
        ...state,
        userReview: action.response.entities
      }
    }
    case `${ActionTypes.FEACH_HOMEWORK_ALL_UNREVIEW}_SUC`: {
      return {
        ...state,
        allUnreview: action.response.entities
      }
    }
    case `${ActionTypes.FEACH_HOMEWORK_ALL_REVIEW}_SUC`: {
      return {
        ...state,
        allReview: action.response.entities
      }
    }
   
    default:
      return state;
  }
}


const homeWorks = combineReducers({
  list,
  homeworkList
})

export default homeWorks