import React from 'react'
import ClassItem from '../components/ClassDetail/ClassItem'
import { Provider } from "react-redux";
import configureStore from '../store/configureStore';
import registerServiceWorker from '../registerServiceWorker';

const store =configureStore();
export default class ClassDetail extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <ClassItem/>
            </Provider>
        )
    }
}

registerServiceWorker();