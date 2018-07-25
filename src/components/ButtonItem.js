import React, { Component } from 'react';
import './ButtonItem.css'
export default class ButtonItem extends Component {
    constructor(props) {
        super(props);
    }

    handleButtonStick = (item, index) => {
        const { onHandleButtonStick } = this.props;
        onHandleButtonStick(item, index)
    }

    renderButtonItem() {
        return (
            <div className='Items-btn'>
                <div className='ItemBtn'>
                    <div className="red-btn" ></div>
                    <div className="yellow-btn"></div>
                    <div className="pur-btn"></div>
                    <div className="black-btn"></div>
                </div>
            </div>
        )
    }


    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    this.renderButtonItem()
                }
            </div>
        )
    }
}
