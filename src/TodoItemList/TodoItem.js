import React, { Component } from 'react';
import { isMenu } from '../actions'
export default class Item extends Component {
    render() {
        const { item } = this.props
        return (
            <div className="top">
                <div className="item">
                    <div className="left">
                        {/* {this.Delete()} */}
                        <img src={item.img} alt="图片加载失败" />
                        <div className="text">
                            <ol>
                                <li>
                                    <h1>{item.title}</h1>
                                </li>
                                <li>
                                    <p>{item.message}</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="time">{item.time}</div>
                    <button onClick={this.handleMenuIdex} >更多</button >
                </div>
            </div>
        )
    }

    handleMenuIdex = () => {
        const index = this.props.idx
        const { dispatch } = this.props;
        const action=isMenu(index)
        dispatch(action)
    }

    // handleItem = (e) => {
    //     this.props.handleItem(e, this.props.itemIdex)
    // }

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