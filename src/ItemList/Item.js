import React, { Component } from 'react';
export default class Item extends Component {
    render() {
        const { item } = this.props
        return (
            <div className="top">
                <div className="item">
                    <div className="left">
                        {this.Delete()}
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
                    <button onClick={this.handleMenu} >更多</button >
                </div>
            </div>
        )
    }

    handleItem = (e) => {
        const index = this.props.idx
        const { todoActions } = this.props;
        if (e.target.checked) {
            todoActions.addItems(index)
        } else {
            todoActions.delItems(index)
        }
    }

    handleMenu = () => {
        const index = this.props.idx
        const { todoActions } = this.props;
        todoActions.isMenu()
        todoActions.handleIndex(index)
    }

    Delete() {
        const { isDeleteActive } = this.props
        if (isDeleteActive === false) {
            return null
        }
        return (
            <div className="deleteMore">
                <input type="checkbox" className="checkboxOneInput" onClick={this.handleItem} ></input>
            </div>
        )
    }
}