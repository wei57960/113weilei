import { normalize } from 'normalizr';
import schemes from '../schema';
import * as ActionTypes from '../const/ActionTypes';

export default {
  login: params => ({
    SERVER_API: {
      type: ActionTypes.LOGIN,
      endpoint: '/login',
      params: {
        mid: params.mid
      }
    },
    mid: params.mid
  }),

  fetchMyMusic: params => ({
    SERVER_API: {
      type: ActionTypes.FETCH_MY_MUSIC,
      endpoint: '/music/my_list',
      params: {
        token: params.token
      },
      normailzerFun: response => {
        const myMusic = normalize(response.data.list, schemes.myMusicListSchema);
        return {
          myMusic
        };
      }
    },
    NEED_TOKEN: '1'
  }),
  fetchCommendMusic: params => ({
    SERVER_API: {
      type: ActionTypes.FETCH_COMMEND_MUSIC,
      endpoint: '/music/recommend_list',
      params: {
        token: params.token
      },
      normailzerFun: response => {
        const commendMusic = normalize(response.data.list, schemes.commendMusicListSchema);
        return {
          commendMusic
        };
      }
    },
    NEED_TOKEN: '1'
  }),
  setSeltedStatus: data => ({
    type: ActionTypes.SET_SELTED_STATUS,
    data
  })
};

