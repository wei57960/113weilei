import React, { Component } from 'react';
import './menu.css'
import { closeButton, itemStick, deleteItem } from './actions'
export default class Menu extends Component {


    handleClose = () => {
        const { dispatch } = this.props;
        const action = closeButton()
        dispatch(action)
    }

    handleStick = () => {
        const { dispatch } = this.props;
        const action = itemStick()
        dispatch(action)
    }

    handleDelete = () => {
        const { dispatch } = this.props;
        const action = deleteItem()
        dispatch(action)
    }

    handleDeleteMore = () => {
        this.handleClose();
    }

    render() {
        const { isMenuActive } = this.props;
        if (isMenuActive === false) {
            return null;
        }
        return (
            <div className="mask-ctn">
                <div className="close-btn" onClick={this.handleClose}>Close</div>
                <div className="dialog-ctn">
                    <div className="menu">
                        <button onClick={this.handleStick} >置顶</button>
                        <button onClick={this.handleDelete}>删除</button>
                        <button onClick={this.handleDeleteMore}>多选删除</button>
                    </div>
                    <div className="submit-btn"></div>
                </div>
            </div>
        )
    }
}