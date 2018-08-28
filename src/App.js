import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import SongBook from './container/SongBook';

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <SongBook />
  </Provider>
);

export default App;
