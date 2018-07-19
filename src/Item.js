import React, { Component } from 'react';
import Menu from './Menu'
export default class Item extends Component {
    constructor(props){
        super(props);
        this.state={
             isMenuActive: false
        }

    }
    render() {
        return (
            <div className="top">
                <div className="item">
                    <div className="left">
                        <img src={this.props.data.img} alt="图片加载失败" />
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
                    <button onClick={this.handleShowMenu.bind(this, true)}>更多</button >
                </div>
                <hr />
                <Menu isActive={this.state.isMenuActive} onCloseClick={this.handleShowMenu}/>
            </div>
        )
    }
    handleShowMenu = isActive => {
        this.setState({ isMenuActive: isActive });
      }
}