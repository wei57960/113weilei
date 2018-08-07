import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'


function classes(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
      const entities = action.response.entities
      return {
        ...state,
        ...entities.classes
      };
    }
    default:
      return state;
  }
}

function teachers(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
      const entities = action.response.entities
      return {
        ...state,
        ...entities.teachers
      };
    }
    default:
      return state;
  }
}

function satisfiled(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
      const entities = action.response.entities
      return {
        ...state,
        ...entities.satisfiled
      };
    }
    case `${ActionTypes.REPLY_USER_FEED_BACK}`: {
      const { time } = action.params

      const targetItem = { ...state[time] }
      targetItem.reply_status = 1

      const nextState = { ...state, [time]: targetItem }
      return nextState
    }
    default:
      return state;
  }
}

function students(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_STUDENT_LIST}_SUC`: {
      const entities = action.response.entities
      return {
        ...state,
        ...entities.students
      }
    }
    default:
      return state;
  }
}

function courses(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_CLASS_INFO}_SUC`: {
      const entities = action.response.entities
      return {
        ...state,
        ...entities.courses
      }
    }
    default:
      return state;
  }
}

export default combineReducers({
  classes,
  teachers,
  satisfiled,
  students,
  courses
});