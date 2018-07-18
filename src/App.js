import React, { Component } from 'react';
import logo from './logo.svg';
import Item from './Item';
import DialogView from './DialogView';
import Button from './Button';
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judgement: false,
      defaultMsg: [{ img: './image/头像 男孩.png', title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: './image/头像 男孩.png', title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: './image/头像 男孩.png', title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: './image/头像 男孩.png', title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: './image/头像 男孩.png', title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: './image/头像 男孩.png', title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
      ]
      ,
      defaultBottom: [{
         img: './img/发现.png', title: '消息'}
        , { img: './img/发现.png', title: '联系人' }
        , { img: './img/发现.png', title: '发现' }
        , { img: './img/发现.png', title: '我' }
      ]
    }
  }
  render() {
    
    return (

      <div className="App" onClick={this.showLog}>
        <div className="head">
          <h3>小年糕</h3>
        </div>

        <div className="coping"></div>
        {this.state.defaultMsg.map((item, idex) => {
          return <Item data={item} key={idex}></Item>
        })
        }
        <div className="ending"></div>
        <hr />
        
        <div className="end">
        {this.state.judgement ? <DialogView/>:''}
          <hr />
          {this.state.defaultBottom.map((item, idex) => {
          return <Button data={item} key={idex}></Button>
        })
        }
        </div>
      </div>
    );
  }

  showLog=()=>{
    console.log(this.state.judgement)
    if (this.state.judgement) {
      this.setState({
        judgement:false
      })
    }
    else {
      this.setState({
        judgement:true
      })
    }
  }
}
