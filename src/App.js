import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers'
import Container from './container/Container'
import { createLogger } from 'redux-logger';
const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(logger) )
)
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

