import React from 'react';
import '../DeletionDialog/DeletionDialog';

class RenameDialog extends React.Component {
  getMaskClassName = () => {
    if (!this.props.isRenameActive) {
      return 'mask hideMask';
    }
    return 'mask showMask';
  }
  getDialogClassName = () => {
    if (!this.props.isRenameActive) {
      return 'dialog hideDialog';
    }
    return 'dialog showDialog';
  }
  handleRenameOperation=() => {

  }
  handleChange=() => {

  }
  renderTitle=() => (
    <div>
      <div><strong>请输入新音乐名称</strong></div>
      <input onChange={this.handleChange} />
    </div>
  )
  render() {
    return (
      <div className="DialogCtn">
        <div className={this.getMaskClassName()} />
        <div className={this.getDialogClassName()}>
          {this.renderTitle()}
          <div>
            <span className="cancel btn" onClick={this.props.onCancel}>取消</span>
            <span className="ok btn" onClick={this.handleRenameOperation}>确定</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RenameDialog;
