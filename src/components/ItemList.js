import React, { Component } from 'react';
import "./ItemList.css"
import ButtonItem from "./ButtonItem"
export default class ItemList extends Component {
  constructor(props) {
    super(props);
   
  }


  handleStick = (item, idx) => {
    const { onHandleStick } = this.props;
    onHandleStick(item, idx)
  }


  // onHandleButtonStick = (Item, idx) => { //改变底部导航栏文字颜色
  //   const newDefaultItemsCorlor = this.state.defaultItemsCorlor.slice();
  //   const items = newDefaultItemsCorlor.splice(idx, 1);
  //   newDefaultItemsCorlor.unshift(items[0]);
  //   this.setState({
  //     defaultItemsCorlor: newDefaultItemsCorlor
  //   })
  // }

  renderItem(item, idx) {
    return (<div className='Items' key={idx}>
      <div className='ItemTitle'>{item.title}</div>
      <div className='ItemButton' onClick={() => this.handleStick(item, idx)}>
        <ButtonItem list={this.props.data}
        handleButtonStick={this.onHandleButtonStick}></ButtonItem>
      </div>
    </div>
    )
  }
  
  renderItemList(){
    const { data } = this.props;
   const a= data.map((item, idx) => {
      return this.renderItem(item, idx)
    })
    return a
  }
  render() {
       return (
      <div>
        {this.renderItemList()
        }</div>

    )
  }
}
