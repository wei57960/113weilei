import React from 'react'
import Person from '../components/Personal/Person'
import { Provider } from "react-redux";
import configureStore from '../store/configureStore';
import registerServiceWorker from '../registerServiceWorker';

const store =configureStore();
export default class Personal extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <Person/>
            </Provider>
        )
    }
}

registerServiceWorker();
