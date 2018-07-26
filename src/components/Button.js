import React, { Component } from 'react';

export default class Button extends Component{
    render(){
        return(
          <div className="button">
            <img src={this.props.data.img} alt="图片加载失败" />
            <h2>{this.props.data.title}</h2>
          </div>
        )
    }
}