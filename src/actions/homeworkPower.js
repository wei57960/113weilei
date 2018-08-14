import ActionTypes from '../const/ActionTypes'


export default {
    addSeltedStaff(id) {
        return {
            type: ActionTypes.ADD_SELTED_STAFF,
            id
        }
    },
    addToPower(data) {
        return {
            type: ActionTypes.ADD_TO_POWER,
            data
        }
    },
    commitSelted() {
        return {
            type: ActionTypes.COMMIT_SELTED,
        }
    },
    searchStaffListByOption: (params) => {
        const { keyName, value } = params
        return {
            type: ActionTypes.SEARCH_STAFF_LIST_BY_OPTION,
            params: { keyName, value }

        }
    },
    deleteStaff: {
       
    }
}
