import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Personal from './container/Personal';
import ClassDetail from './container/ClassDetail'
ReactDOM.render(
    <BrowserRouter>
    <div>
        <Route path="/" exact component={App}/>
        <Route path='/person' component={Personal}/>
        <Route path='/class' component={ClassDetail}/>
    </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();