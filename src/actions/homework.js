import ActionTypes from '../const/ActionTypes'
import { normalize } from 'normalizr'
import * as schemes from '../schemes'

export default {
    rejectComment(id) {
        return {
            type: ActionTypes.REJECT_COMMENT,
            id
        }
    },
    feachHomeworkUserUnReview: (params) => {
        const { token, isReviewed } = params
        return {
            SERVER_API: {
                type: ActionTypes.FEACH_HOMEWORK_USER_UNREVIEW,
                endpoint: '/getHomeWork',
                params: {
                    token,
                    isReviewed
                },
                normailzerFun: response => normalize(response.data, schemes.HOMEWORK)
            }
        }
    }, feachHomeworkUserReview: (params) => {
        const { token, isReviewed } = params
        return {
            SERVER_API: {
                type: ActionTypes.FEACH_HOMEWORK_USER_REVIEW,
                endpoint: '/getHomeWork',
                params: {
                    token,
                    isReviewed
                },
                normailzerFun: response => normalize(response.data, schemes.HOMEWORK)
            }
        }
    }, feachHomeworkAllUnreview: (params) => {
        const { token, isReviewed } = params
        return {
            SERVER_API: {
                type: ActionTypes.FEACH_HOMEWORK_ALL_UNREVIEW,
                endpoint: '/getHomeWork',
                params: {
                    token,
                    isReviewed
                },
                normailzerFun: response => normalize(response.data, schemes.HOMEWORK)
            }
        }
    }, feachHomeworkAllReview: (params) => {
        const { token, isReviewed } = params
        return {
            SERVER_API: {
                type: ActionTypes.FEACH_HOMEWORK_ALL_REVIEW,
                endpoint: '/getHomeWork',
                params: {
                    token,
                    isReviewed
                },
                normailzerFun: response => normalize(response.data, schemes.HOMEWORK)
            }
        }
    },

}

