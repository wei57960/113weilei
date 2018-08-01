import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import Container from './container/Container'
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

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
