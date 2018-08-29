import React from 'react';
import './RenameDialog.css';

class RenameDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMusicName: ''
    };
  }
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
    const operationActions = this.props.operationActions;
    operationActions.renameMusic({
      id: this.props.musicId,
      musicName: this.state.currentMusicName
    });
    this.props.onCancel();
  }
  handleChange = e => {
    this.setState({ currentMusicName: e.target.value });
  }
  renderTitle=() => {
    const musicId = this.props.musicId;
    const myMusic = this.props.myMusic;
    let name;
    if (myMusic[musicId]) {
      name = myMusic[musicId].name;
    }
    return (
      <div>
        <div className="rename-title" ><strong>请输入新音乐名称</strong></div>
        <input type="text" placeholder={name} onChange={this.handleChange} />
      </div>
    );
  }
  render() {
    return (
      <div className="DialogCtn">
        <div className={this.getMaskClassName()} />
        <div className={this.getDialogClassName()}>
          {this.renderTitle()}
          <div className="bottom-btn">
            <span className="cancel btn" onClick={this.props.onCancel}>取消</span>
            <span className="btn ok" onClick={this.handleRenameOperation}>确定</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RenameDialog;
