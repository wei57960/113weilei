import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            <div className="top">
                <div className="item">
                    <div className="left">
                        <img src={require('./image/头像 男孩.png')} alt="图片加载失败" />
                        <div className="text">
                            <ol>
                                <li>
                                    <h1>{this.props.data.title}</h1>
                                </li>
                                <li>
                                    <p>{this.props.data.message}</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="time">{this.props.data.time}</div>
                </div>
                <hr />
            </div>
        )
    }
}