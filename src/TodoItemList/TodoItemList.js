import React from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {

  render() {
    const { list, dispatch } = this.props;
    if (!list) {
      return null;
    }
    return (
      <div>
        {list.map((item, idx) => {
          return <TodoItem key={idx} item={item} idx={idx} dispatch={dispatch}/>
        })}
      </div>
    );
  }
}