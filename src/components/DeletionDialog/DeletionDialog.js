import React from 'react';
import './DeletionDialog.css';


class DeletionDialog extends React.Component {
  getMaskClassName = () => {
    if (!this.props.isActive) {
      return 'mask hideMask';
    }
    return 'mask showMask';
  }
  getDialogClassName = () => {
    if (!this.props.isActive) {
      return 'dialog hideDialog';
    }
    return 'dialog showDialog';
  }
  handleDeleteOperation=() => {
    const { operationActions, basicInfo } = this.props;
    let res = [];
    if (basicInfo.selted === 'singleton') {
      res.push(basicInfo.single);
    } else {
      res = basicInfo.multi;
    }
    operationActions.deleteMusic(res);
    operationActions.deleteRemainMusic();
    this.props.onCancel();
  }
  renderTitle=() => {
    const { basicInfo, myMusic } = this.props;
    let musicName;
    if (myMusic[basicInfo.single]) {
      musicName = myMusic[basicInfo.single].name;
    }
    if (basicInfo.selted === 'singleton') {
      return <div className="delete-title">{`确认删除 ${musicName}这首歌曲吗`}</div>;
    }
    return <div className="delete-title">{`确认删除这${basicInfo.multi.length}首歌曲吗`}</div>;
  }
  render() {
    return (
      <div className="DialogCtn">
        <div className={this.getMaskClassName()} />
        <div className={this.getDialogClassName()}>
          {this.renderTitle()}
          <div className="bottom-btn">
            <span className="cancel btn" onClick={this.props.onCancel}>取消</span>
            <span className="ok btn" onClick={this.handleDeleteOperation}>确定</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DeletionDialog;
