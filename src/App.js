import React, { Component } from 'react';
import DialogView from './DialogView';
import Button from './Button';
import './App.css';
import Menu from './Menu';
import TodoItemList from './TodoItemList/TodoItemList';
import { connect } from 'react-redux'
import { isDialog } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judgement: false,

      defaultBottom: [{
        img: require("./image/消息.png"), title: '消息'
      }
        , { img: require("./image/通讯录.png"), title: '联系人' }
        , {
        img: require("./image/发现.png"), title: '发现'
      }
        , { img: require("./image/我.png"), title: '我' }
      ],
      isDeleteActive: false,
      itemArr: []
    }
  }

  render() {
    const list = this.props.dataItems;
    const { dispatch } = this.props;
    const isMenuActive = this.props.isMenuActive;
    const isDialogActive = this.props.isDialogActive;

    return (
      <div className="App" >
        {this.showHead()}
        <div className="coping"></div>
        <TodoItemList list={list} dispatch={dispatch} ></TodoItemList>
        {this.showDeleteButton()}
        <div className="ending"></div>

        <div className="end">
          {this.state.defaultBottom.map((item, idex) => {
            return <Button className="idx-btn" data={item} key={idex}></Button>
          })
          }
        </div>

        <DialogView dispatch={this.dispatch} isDialogActive={isDialogActive}  />
        <Menu isMenuActive={isMenuActive} idex={this.handleIdex}
          dispatch={dispatch} />
      </div>
    );
  } 
  showHead() { //头部展示元素
    return (
      <div className="head">
        <h3>小年糕</h3>
        <div className="addMsg" onClick={this.handleShowDialog}>
          <img src={require('./image/添加 加号 无边框.png')} alt="图片加载失败" />
        </div>
      </div>)
  }


  handleIdex = (idexx) => { //传递idex
    this.setState({
      idex: idexx
    })
  }

  handleShowDialog = () => { //是否显示dialog页面
    const { dispatch } = this.props;
    const action = isDialog()
    dispatch(action)
  }





  // showMore = () => { //显示删除页面
  //   this.setState({ isDeleteActive: !this.state.isDeleteActive })
  // }

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


}

function mapStateProps(state, ownProps) {

  return state;
}

export default connect(mapStateProps)(App);