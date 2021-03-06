import axios from 'axios';
import actions from '../actions';

const ActionStored = [];
let token = '';
const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn/';
const axiosFetch = axios.create({
  baseURL: API_DOMAIN,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

const callServerApi = apiParams => {
  const { endpoint, params } = apiParams;
  return new Promise((resolve, reject) => {
    axiosFetch({
      method: 'POST',
      url: endpoint,
      data: params
    })
      .then(res => {
        if (res.data.ret === 1) {
          resolve(res);
        } else {
          reject(res.data.errMsg);
        }
      })
      .catch(res => {
        reject(JSON.stringify(res));
      });
  });
};

const serverApi = store => next => action => {
  if (!action.SERVER_API) {
    return next(action);
  }
  const { type, endpoint, params } = action.SERVER_API;
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint.');
  }
  if (typeof type !== 'string') {
    throw new Error('Specify a string type.');
  }

  if (typeof params !== 'object') {
    throw new Error('Specify a object params.');
  }

  if (action.NEED_TOKEN) {
    ActionStored.push(action);
  }
  const { normailzerFun } = action.SERVER_API;
  function actionWith(data) {
    const finalAction = { ...action, ...data };
    delete finalAction.SERVER_API;
    return finalAction;
  }
  next(actionWith({
    type: `${type}_REQ`,
    __api: { endpoint, params }
  }));
  callServerApi({ endpoint, params })
    .then(res => {
      const response = typeof (normailzerFun) !== 'undefined' ? normailzerFun(res.data) : res.data;
      next(actionWith({
        type: `${type}_SUC`,
        __api: { endpoint, params },
        response
      }));
      console.log(res.data.type);
      if (res.data.data.token) {
        token = res.data.data.token;
        // for (let i = 0; i < ActionStored.length; i++) {
        //   ActionStored[i].SERVER_API.params.token = token;
        //   console.log(ActionStored[i])
        //   // store.dispatch(ActionStored[i]);
        // }
        store.dispatch(actions.fetchMyMusic({ token }));
        store.dispatch(actions.fetchCommendMusic({ token }));
      }
    })
    .catch(errMsg => {
      next(actionWith({
        type: `${type}_FAI`,
        __api: { endpoint, params },
        errMsg
      }));
    });
  return null;
};


export default serverApi;
