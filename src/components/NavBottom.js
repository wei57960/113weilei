import React, { Component } from 'react';
import "./NavBottom.css"
import bottomIcon from '../images/smile.png'
export default class NavBottom extends Component {
    constructor(props) {
        super(props);
    }

    renderBottom(item, idex) {
        return (<div key={idex} className='bottom'>
            <div className='bottom-top'>
                <img className="bottom-icon" src={bottomIcon} />
            </div>
            <div><font color={item.color}>{item.title}</font></div>
        </div>)
    }

    render() {
        const { data } = this.props;
        return (
            <div className="bottom-b">
                {data.map((item, idx) => {
                    return this.renderBottom(item, idx)
                })
                }
            </div>

        )
    }
}