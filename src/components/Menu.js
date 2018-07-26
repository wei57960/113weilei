import React, { Component } from 'react';
import './menu.css'
export default class Menu extends Component {

    handleClose = () => {
        const { todoActions } = this.props;
        todoActions.closeButton()
    }

    handleStick = () => {
        const { todoActions } = this.props;
        todoActions.itemStick()
        todoActions.closeButton()
    }

    handleDelete = () => {
        const { todoActions } = this.props;
        todoActions.deleteItem()
        todoActions.closeButton()
    }

    handleDeleteMore = () => {
        const { todoActions } = this.props;
        todoActions.isDelete()
        todoActions.closeButton()
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