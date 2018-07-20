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
      defaultMsg: [{ img: require("./image/头像 男孩.png"), title: '小年糕前端训练营111', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require("./image/头像 男孩.png"), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require('./image/头像 女孩.png'), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require("./image/头像 男孩.png"), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require('./image/头像 女孩.png'), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require("./image/头像 男孩.png"), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
      ]
      ,
      defaultBottom: [{
        img: require("./image/消息.png"), title: '消息'
      }
        , { img: require("./image/通讯录.png"), title: '联系人' }
        , {
        img: require("./image/发现.png"), title: '发现'
      }
        , { img: require("./image/我.png"), title: '我' }
      ],
      isDialogActive: false,
      idex: null
    }
  }


  render() {
    return (


      <div className="App" >
        <div className="head">
          <h3>小年糕</h3>
          <div className="addMsg" onClick={this.handleShowDialog.bind(this, true)}>
            <img src={require('./image/添加 加号 无边框.png')} alt="图片加载失败" />
          </div>
        </div>

        <div className="coping"></div>
        {this.state.defaultMsg.map((item, idex) => {
          return <Item data={item} key={idex} itemIdex={idex} changeIdex={this.handleIdex} handleStick={this.handleStick}></Item>
        })
        }
        <div className="ending"></div>
        <hr />

        <div className="end">
          {/* {this.state.judgement ? <DialogView /> : ''} */}
          <hr />
          {this.state.defaultBottom.map((item, idex) => {
            return <Button data={item} key={idex}></Button>
          })
          }
        </div>
        <DialogView isActive={this.state.isDialogActive} onCloseClick={this.handleShowDialog} passMsg={this.passMsg} />
      </div>
    );
  }

  handleIdex = (idexx) => {
    this.setState({
      idex: idexx
    })
  }

  handleShowDialog = isActive => {
    this.setState({ isDialogActive: isActive });
  }

  handleStick = () => {
    const newMsg = this.state.defaultMsg.slice();
    const Item = newMsg.splice(this.state.idex, 1);
    newMsg.unshift(Item[0])
    const k = newMsg;
    this.setState({
      defaultMsg: k
    })

  }

  passMsg = (e) => {
    const item = e
    const newMsg = this.state.defaultMsg.slice()
    newMsg.push(e);
    this.setState({
      defaultMsg: newMsg
    })
  }
}