import React, { Component } from 'react';
import DialogView from './components/DialogView';
import './App.css';
import Menu from './components/Menu';
import NavBar from './components/NavBar'
import ItemList from './ItemList/ItemList.js';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as todoActionCreators from './actions';
class App extends Component {
  render() {
    const { list, isActive } = this.props
    const { todoActions } = this.props
    return (
      <div className="App" >
        <ItemList list={list.dataItems} todoActions={todoActions} 
        isDeleteActive={isActive.isDeleteActive}/>
        <NavBar items={list.defaultBottoms} />
        <DialogView todoActions={todoActions} isDialogActive={isActive.isDialogActive} />
        <Menu isMenuActive={isActive.isMenuActive} todoActions={todoActions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { list, isActive } = state
  return { list, isActive };
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);