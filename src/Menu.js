import React, { Component } from 'react';
import './menu.css'
export default class Menu extends Component {
    handleClose = () => {
        this.props.onCloseClick(false);
    }
    render() {
        const { isActive } = this.props;
        if (!isActive) {
            return null;
        }
        return (
            <div className="mask-ctn">
                <div className="close-btn" onClick={this.handleClose}>Close</div>

                <div className="dialog-ctn">
                    <div className="menu">
                       <button>置顶</button>
                       <button>删除</button>
                       <button>多选删除</button>
                    </div>
                    <div className="submit-btn"></div>
                </div>
            </div>

        )
    }
}