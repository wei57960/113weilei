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
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
      const { history, current } = action.response;
      return {
        ...state,
        ...history.entities.classes,
        ...current.entities.classes
      };
    }
    case `${ActionTypes.FEACH_HOMEWORK_USER_REVIEW}_SUC`:
    case `${ActionTypes.FEACH_HOMEWORK_USER_UNREVIEW}_SUC`:
    case `${ActionTypes.FEACH_HOMEWORK_ALL_REVIEW}_SUC`:
    case `${ActionTypes.FEACH_HOMEWORK_ALL_UNREVIEW}_SUC`:
      {
        return {
          ...state,
          ...action.response.entities.classes
        }
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
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
      const { history, current } = action.response;
      return {
        ...state,
        ...history.entities.teachers,
        ...current.entities.teachers
      };
    }
    case `${ActionTypes.FEACH_HOMEWORK_USER_REVIEW}_SUC`:
    case `${ActionTypes.FEACH_HOMEWORK_USER_UNREVIEW}_SUC`:
    case `${ActionTypes.FEACH_HOMEWORK_ALL_REVIEW}_SUC`:
    case `${ActionTypes.FEACH_HOMEWORK_ALL_UNREVIEW}_SUC`:
      {
        return {
          ...state,
          ...action.response.entities.teachers
        }
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

function lessons(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
      const { history, current } = action.response;

      return {
        ...state,
        ...history.entities.lessons,
        ...current.entities.lessons
      }
    }
    default:
      return state;
  }
}

function students(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_STUDENT_LIST}_SUC`: {
      const { entities } = action.response;
      return {
        ...state,
        ...entities.students
      }
    }
    default:
      return state;
  }
}

function comments(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FEACH_HOMEWORK_USER_REVIEW}_SUC`:
    case `${ActionTypes.FEACH_HOMEWORK_USER_UNREVIEW}_SUC`:
    case `${ActionTypes.FEACH_HOMEWORK_ALL_REVIEW}_SUC`:
    case `${ActionTypes.FEACH_HOMEWORK_ALL_UNREVIEW}_SUC`:
      {
        return {
          ...state,
          ...action.response.entities.comments
        }
      }
    case `${ActionTypes.REJECT_COMMENT}`: {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          reason: '回复太简单',
          status: 'reslove'
        }
      }
    }
    default: return state;
  }
}

function homeworks(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FEACH_HOMEWORK_USER_REVIEW}_SUC`:
    case `${ActionTypes.FEACH_HOMEWORK_USER_UNREVIEW}_SUC`:
    case `${ActionTypes.FEACH_HOMEWORK_ALL_REVIEW}_SUC`:
    case `${ActionTypes.FEACH_HOMEWORK_ALL_UNREVIEW}_SUC`:
      {
        return {
          ...state,
          ...action.response.entities.homeworks
        }
      }
    default: return state
  }
}

export default combineReducers({
  classes,
  teachers,
  satisfiled,
  students,
  lessons,
  comments,
  homeworks
});