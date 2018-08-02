import React from 'react';
import './App.css';

import registerServiceWorker from './registerServiceWorker';


export default class App extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    );
  }
}

registerServiceWorker();
