import React, { Component } from 'react';
export default class Item extends Component {
    render() {
        return (
            <div className="top">
                <div className="item">
                    <div className="left">
                        {this.Delete()}
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
                    <button onClick={this.handleMenuIdex} >更多</button >
                </div>
                <hr />
            </div>
        )
    }

    handleMenuIdex = () => {
        this.props.handleShowMenu(this.props.itemIdex)
    }

    handleItem=(e)=>{
        this.props.handleItem(e,this.props.itemIdex)
    }

    Delete() {
        if (this.props.isDeleteActive === false) {
            return null
        }
        return (
            <div className="deleteMore">
                <input type="checkbox" className="checkboxOneInput" onClick={this.handleItem} ></input>
            </div>
        )
    }
}