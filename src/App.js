import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import NavBottom from './components/NavBottom'
class App extends Component { //红ff0033 黄ffff66 紫ff00cc 黑000000
  constructor(props) {
    super(props);
    this.state = {
      defaultItems: [{ title: '微信', color: ['ff0033', 'ffff66', 'ff00cc', ' 000000'] },
      { title: '通讯录', color: ['ff0033', 'ffff66', 'ff00cc', ' 000000'] },
      { title: '发现', color: ['ff0033', 'ffff66', 'ff00cc', ' 000000'] },
      { title: '我', color: ['ff0033', 'ffff66', 'ff00cc', ' 000000'] }],

      bottomItems: [{ title: '微信', color: 'ff0033' },
      { title: '通讯录', color: 'ffff66' },
      { title: '发现', color: 'ff00cc' },
      { title: '我', color: '000000' }]
    }
  }


  handleItemStick = (Item, idx) => {
    const newItems = this.state.defaultItems.slice();
    const items = newItems.splice(idx, 1);
    newItems.unshift(items[0]);
    this.setState({
      defaultItems: newItems
    })
  }


  render() {
    return (
      <div className="body">
        <ItemList data={this.state.defaultItems}
          onHandleStick={this.handleItemStick}
        />
        <NavBottom data={this.state.bottomItems}></NavBottom>
      </div>
    );
  }
}

export default App;
