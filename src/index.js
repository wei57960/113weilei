import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Container from './container/Container';
import { Provider } from "react-redux";
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router'
import Person from './components/Personal/Person';
import ClassItem from './components/ClassDetail/ClassItem';

const store = configureStore();
const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: Person },
    childRoutes: [
        { path: 'students/:mid', component: Container },
        { path: 'classdetail/:className', component: ClassItem }
    ]
}]

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>, document.getElementById('root'));
registerServiceWorker();