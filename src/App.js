import React, { Component } from 'react';
import Item from './Item';
import DialogView from './DialogView';
import Button from './Button';
import './App.css';
import Menu from './Menu';
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
      isDeleteActive: false,
      isMenuActive: false,
      idex: null,
      itemArr: []
    }
  }

  render() {
    return (
      <div className="App" >
        {this.showHead()}
        <div className="coping"></div>
        {this.state.defaultMsg.map((item, idex) => {
          return <Item isDeleteActive={this.state.isDeleteActive}
            showMore={this.showMore}
            data={item}
            key={idex}
            itemIdex={idex}
            changeIdex={this.handleIdex}
            handleShowMenu={this.handleShowMenuPage}
            handleItem={this.handleItem} />
        })
        }
        {this.showDeleteButton()}
        <div className="ending"></div>
        <div className="end">
          {this.state.defaultBottom.map((item, idex) => {
            return <Button className="idx-btn" data={item} key={idex}></Button>
          })
          }
        </div>
        <DialogView isActive={this.state.isDialogActive} onCloseClick={this.handleShowDialog} passMsg={this.passMsg} />
        <Menu isMActive={this.state.isMenuActive} onCloseClick={this.handleShowMenuPage} handleStick={this.handleStick} handleDelete={this.handleDelete}
          isDeleteActive={this.showMore} />
      </div>
    );// handleDeleteMore={this.handleDeleteMore} 
  }

  showHead() { //头部展示元素
    return (
      <div className="head">
        <h3>小年糕</h3>
        <div className="addMsg" onClick={this.handleShowDialog.bind(this, true)}>
          <img src={require('./image/添加 加号 无边框.png')} alt="图片加载失败" />
        </div>
      </div>)
  }

  handleShowMenuPage = idex => {  //是否展示菜单页
    this.handleIdex(idex);
    const k = this.state.isMenuActive;
    this.setState({ isMenuActive: !k });
  }

  handleIdex = (idexx) => { //传递idex
    this.setState({
      idex: idexx
    })
  }

  handleShowDialog = isActive => { //是否显示dialog页面
    this.setState({ isDialogActive: isActive });
  }

  handleStick = (f) => { //置顶一个item
    const newMsg = this.state.defaultMsg.slice();
    const Item = newMsg.splice(this.state.idex, 1);
    newMsg.unshift(Item[0])
    this.setState({
      defaultMsg: newMsg
    })
    f();
  }

  handleDelete = (fun) => { //单个删除
    const newMsg = this.state.defaultMsg.slice();
    newMsg.splice(this.state.idex, 1);
    console.log(this.state.idex)
    this.setState({
      defaultMsg: newMsg
    })
    fun();
  }

  showMore = () => { //显示删除页面
    this.setState({ isDeleteActive: !this.state.isDeleteActive })
  }

  showDeleteButton() { //显示删除按钮
    if (this.state.isDeleteActive === false) {
      return null
    } return (
      <div className="deleteButton"><button onClick={this.submitDelete}>删除</button></div>
    )
  }


  handleItem = (e, idex) => { //多个删除时往数组里面添加删除元素
    if (e.target.checked) {
      this.state.itemArr.push(idex)
    } else {
      let deleteItem = this.state.itemArr.indexOf(e.target.value)
      this.state.itemArr.splice(deleteItem, 1)
    }
    console.log(this.state.itemArr);

  }

  submitDelete = () => { //多个删除
    this.state.itemArr.sort();     //排序
    const newMsg = this.state.defaultMsg.slice();
    this.state.itemArr.reverse();                     //反转
    console.log(this.state.itemArr)
    for (let i = 0; i < this.state.itemArr.length; i++) {   //删除
      newMsg.splice(this.state.itemArr[i], 1);
    }
    this.setState({
      defaultMsg: newMsg,
      isDeleteActive: false,
      itemArr: []
    })
  }

  passMsg = (e) => {
    const newMsg = this.state.defaultMsg.slice()
    newMsg.unshift(e);
    this.setState({
      defaultMsg: newMsg
    })
  }
}