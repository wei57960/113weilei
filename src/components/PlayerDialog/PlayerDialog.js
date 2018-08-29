import React from 'react';
import './PlayerDialog.css';

class PlayerDialog extends React.Component {
  state={
    isPlaing: true
  }
    getMaskClassName = () => {
      if (!this.props.isActive) {
        return 'mask hideMask';
      }
      return 'mask showMask';
    }
    getDialogClassName = () => {
      if (!this.props.isActive) {
        return 'player-dialog player-hideDialog';
      }
      return 'player-dialog player-showDialog';
    }
    changePlayingStatus=() => {
      this.setState({
        isPlaing: !this.state.isPlaing
      });
    }
    showStatusIcon=() => {
      if (this.state.isPlaing == true) {
        return (<img
          src={require('../../icons/btn_pause.png')}
          alt=""
          onClick={this.changePlayingStatus}
        />);
      } return (<img
        src={require('../../icons/btn_play.png')}
        alt=""
        onClick={this.changePlayingStatus}
      />);
    }

    render() {
      const musicId = this.props.musicId;
      const entities = this.props.entities;
      let name,
        url;
      if (entities.myMusic[musicId]) {
        name = entities.myMusic[musicId].name;
      } else if (entities.commendMusic[musicId]) {
        name = entities.commendMusic[musicId].name;
      }
      if (this.props.isActive) {
        if (entities.myMusic[musicId]) {
          url = entities.myMusic[musicId].m_url;
        } else if (entities.commendMusic[musicId]) {
          url = entities.commendMusic[musicId].m_url;
        }
      }
      console.log(url);
      return (
        <div className="DialogCtn">
          <div className={this.getMaskClassName()} />
          <div className={this.getDialogClassName()}>
            <div className="player-close-btn" onClick={this.props.onCancel}>关闭</div>
            <div className="player-musicName"><strong>{name}</strong></div>
            <video autoPlay="autoplay" src={url} />
            <div>/{}</div>
            <div>{this.showStatusIcon()}</div>
          </div>
        </div>
      );
    }
}

export default PlayerDialog;
