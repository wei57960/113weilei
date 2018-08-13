import ActionTypes from '../const/ActionTypes'


export default {
    addSeltedStaff (mid) {
        return {
            type: ActionTypes.ADD_SELTED_STAFF,
            mid
        }
    }
}
