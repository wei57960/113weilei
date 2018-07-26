import React from 'react';
import Item from './Item'

export default class ItemList extends React.Component {
  render() {
    const { list, todoActions, isDeleteActive } = this.props;
    if (!list) {
      return null;
    }
    return (
      <div>
        {this.showHead()}
        <div className="coping"></div>
        {list.map((item, idx) => {
          return <Item key={idx} item={item} idx={idx} todoActions={todoActions}
            isDeleteActive={isDeleteActive} />
        })}
        <div className="ending"></div>
        {this.showDeleteButton()}
      </div>
    );
  }

  showHead() { //头部展示元素
    return (
      <div className="head">
        <h3>小年糕</h3>
        <div className="addMsg" onClick={this.handleShowDialog}>
          <img src={require('../image/添加 加号 无边框.png')} alt="图片加载失败" />
        </div>
      </div>)
  }

  handleShowDialog = () => { //是否显示dialog页面
    const { todoActions } = this.props;
    todoActions.isDialog()
  }

  submitDelete = () => {
    const { todoActions } = this.props;
    todoActions.closeButton();
  }

  showDeleteButton() { //显示删除按钮
    if (this.props.isDeleteActive === false) {
      return null
    } return (
      <div className="deleteButton"><button onClick={this.submitDelete}>删除</button></div>
    )
  }
}