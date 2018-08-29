import React from 'react';
import './PlayerDialog.css';

class PlayerDialog extends React.Component {
  state={
    isPlaing: true,
    currentTime: 0
  }
  componentWillMount() {
    this.setState({ currentTime: 0 });
  }
  onCancel=() => {
    const audio = document.getElementById('music');
    const { onCancel } = this.props;
    onCancel();
    audio.pause();
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
    formatSeconds = value => {
      let secondTime = parseInt(value, 10);
      let minuteTime = 0;
      if (secondTime > 60) {
        minuteTime = parseInt(secondTime / 60, 10);
        secondTime = parseInt(secondTime % 60, 10);
      }
      let result = `${parseInt(secondTime, 10)}`;
      if (minuteTime > 0) {
        result = `${parseInt(minuteTime, 10)}:${result}`;
      }
      return result;
    }
    changePlayingStatus=() => {
      this.setState({
        isPlaing: !this.state.isPlaing
      });
      const audio = document.getElementById('music');
      if (this.state.isPlaing === true) {
        audio.pause();
      } else {
        audio.play();
      }
    }
    showStatusIcon=() => {
      if (this.state.isPlaing == true) {
        return (<img
          id="player-img"
          src={require('../../icons/btn_pause.png')}
          alt=""
          onClick={this.changePlayingStatus}
        />);
      } return (<img
        id="player-img"
        src={require('../../icons/btn_play.png')}
        alt=""
        onClick={this.changePlayingStatus}
      />);
    }
    changePlayerProgress = e => {
      let x = e.targetTouches[0].clientX - 100;
      if (x > 300) {
        x = 300;
      }
      if (x < 0) {
        x = 0;
      }
      this.setState({ currentTime: x });
    }
    render() {
      const musicId = this.props.musicId;
      const entities = this.props.entities;
      let name,
        url,
        du;
      if (this.props.isActive) {
        if (entities.myMusic[musicId]) {
          name = entities.myMusic[musicId].name;
          du = entities.myMusic[musicId].du;
          url = entities.myMusic[musicId].m_url;
        } else if (entities.commendMusic[musicId]) {
          name = entities.commendMusic[musicId].name;
          du = entities.commendMusic[musicId].du;
          url = entities.commendMusic[musicId].m_url;
        }
      }
      return (
        <div className="DialogCtn">
          <div className={this.getMaskClassName()} />
          <div className={this.getDialogClassName()}>
            <div className="player-close-btn" onClick={this.onCancel}>关闭</div>
            <div className="player-musicName"><strong>{name}</strong></div>
            <video autoPlay="autoPlay" src={url} id="music" />
            <div className="current-play-time">
              {this.formatSeconds(this.state.currentTime * du / 300) }/
              {this.formatSeconds(du)}
            </div>
            <div className="control-btn">{this.showStatusIcon()}
              <div className="progress-bar">
                <div className="player-inner-bar" >
                  <div
                    className="playerDialog-color"
                    style={{ width: this.state.currentTime }}
                  >
                    <div
                      className="playerDialog-btn"
                      style={{ marginLeft: this.state.currentTime }}
                      onTouchStart={this.changePlayingStatus}
                      onTouchMove={this.changePlayerProgress}
                      onTouchEnd={this.changePlayingStatus}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default PlayerDialog;
