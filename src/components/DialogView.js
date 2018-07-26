import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {
    constructor(props) {
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.title = this.title.bind(this);
        this.discription = this.discription.bind(this);
        this.time = this.time.bind(this);
        //设置初始值  
        this.state = {
            a: '',
            b: '',
            c: ''
        }
    }
    //获取input中的值,动态渲染再节点上去
    title(e) {
        let value = e.target.value;
        this.setState({ a: value })
    };
    discription(e) {
        let value = e.target.value;
        this.setState({ b: value })
    };
    time(e) {
        let value = e.target.value;
        this.setState({ c: value })
    };

    handleClose = () => {
        const { todoActions } = this.props;
        todoActions.closeButton()
    }

    handleAddItem = () => {
        const data = {
            img: require("../image/头像 男孩.png"), title: this.state.a, message: this.state.b, time: this.state.c
        }
        if (this.state.a && this.state.b && this.state.c) {
            const { todoActions } = this.props;
            todoActions.addItem(data)
        }
        this.setState({ a: '', b: '', c: '' })
        this.handleClose();
    }

    render() {
        const { isDialogActive } = this.props;
        if (isDialogActive === false) {
            return null;
        }
        return (
            <div className="mask-ctn">
                <div className="close-btn" onClick={this.handleClose}>Close</div>
                <div className="dialog-ctn">
                    <div className="inputMsg">
                        <div>
                            <span>标题</span>
                            <input id="title" type="text" onChange={this.title} />
                        </div>
                        <div>
                            <span>描述</span>
                            <input id="discription" type="text" onChange={this.discription} />
                        </div>
                        <div>
                            <span>时间</span>
                            <input id="time" type="text" onChange={this.time} />
                        </div>
                    </div>
                    <div className="submit-btn" onClick={this.handleAddItem}>确认</div>
                </div>
            </div>
        )
    }
}

