import React from 'react';
import './App.css';
import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from './reducers'
import Container from './container/Container'
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
// import { createLogger } from 'redux-logger';
// const logger = createLogger();
// const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(logger) )
// )
const store =configureStore();
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

registerServiceWorker();
