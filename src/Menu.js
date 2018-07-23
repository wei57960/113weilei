import React, { Component } from 'react';
import './menu.css'
export default class Menu extends Component {
    handleClose = () => {
        this.props.onCloseClick(false);
    }
 
    handleStick = () => {
        this.props.handleStick(this.handleClose)
    }

    handleDelete = () => {
        this.props.handleDelete(this.handleClose)
    }

    handleDeleteMore=()=>{
        this.props.isDeleteActive()
        // this.props.handleDeleteMore(this.handleClose)
        this.handleClose();
    }
    
    render() {
        const { isMActive } = this.props;
        if (!isMActive) {
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