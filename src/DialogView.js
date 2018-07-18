import React, { Component } from 'react';
export default class DialogView extends Component{
    constructor(props){
        super(props);
    }
 
    render(){
        return(
            <div className="dialog" onClick={this.showMessage}>
                <button ref="all">全选</button>
                <button ref="add">增加</button>
                <button ref="delete">删除</button>
                <button ref="update">修改</button>
            </div>
        )
    }

    showMessage(e){
        console.log(e.target.innerText);
        e.stopPropagation();
    }
}