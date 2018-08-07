import ActionTypes from '../const/ActionTypes'
import { normalize } from 'normalizr'
import * as schemes from '../schemes'

export default {
    feachHomeworkInfo: (params) => {
        const { token, isReviewed } = params
        return {
            SERVER_API: {
                type: ActionTypes.FEACH_HOMEWORK_INFO,
                endpoint: '/getHomeWork',
                params: {
                    token,
                    isReviewed
                },
                normailzerFun: response => normalize(response.data, schemes.HOMEWORK)
            }
        }
    }
}