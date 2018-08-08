import ActionTypes from '../const/ActionTypes'


export function rejectComment(id) {
    return {
        type: ActionTypes.REJECT_COMMENT,
        id
    }
}
