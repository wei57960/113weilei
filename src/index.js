import React from 'react';
import ReactDOM from 'react-dom';
import Game from './container/Game';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';


/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const preloadedState = {};

const logger = createLogger({
  duration: true,
  diff: false
});

try {
  let bestScore = localStorage.getItem('bestScore');
  if(bestScore) {
    bestScore = JSON.parse(bestScore);
    preloadedState.scores = { bestScore };
  }
} catch(e){}

const store = createStore(rootReducer, preloadedState, composeEnhancers(
  applyMiddleware(thunk,logger)
));

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
