import * as ActionTypes from '../const/ActionTypes'
const defaultHeaderMsgs = {
    Items: {
    }
}

export default function headerList(state = defaultHeaderMsgs, action) {
    switch (action.type) {
        case `${ActionTypes.GET_USER_INFO}_SUC`: {
            const newState = action.data.data
            return {
                ...newState
            }
        }
        case `${ActionTypes.GET_USER_INFO}_FAI`:{
            return state
        }
        default:
            return state
    }
}