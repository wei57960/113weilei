import React from 'react';

class InterceptDialog extends React.Component {
    state={
      isPlaing: true
    }
    formatSeconds = value => {
        let secondTime = parseInt(value);
        let minuteTime = 0;
        if (secondTime > 60) {
          minuteTime = parseInt(secondTime / 60);
          secondTime = parseInt(secondTime % 60);
        }
        let result = `${parseInt(secondTime)}`;
        if (minuteTime > 0) {
          result = `${parseInt(minuteTime)}:${result}`;
        }
        return result;
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
      showStatusIcon=() => {
        if (this.state.isPlaing == true) {
          return (<img
            className="player-img"
            src={require('../../icons/btn_pause.png')}
            alt=""
            onClick={this.changePlayingStatus}
          />);
        } return (<img
          className="player-img"
          src={require('../../icons/btn_play.png')}
          alt=""
          onClick={this.changePlayingStatus}
        />);
      }
      showStatusIcon=() => {
        if (this.state.isPlaing == true) {
          return (<img
            className="player-img"
            src={require('../../icons/btn_pause.png')}
            alt=""
            onClick={this.changePlayingStatus}
          />);
        } return (<img
          className="player-img"
          src={require('../../icons/btn_play.png')}
          alt=""
          onClick={this.changePlayingStatus}
        />);
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
            name = entities.myMusic[musicId].name;
            du = entities.myMusic[musicId].du;
            url = entities.commendMusic[musicId].m_url;
          }
        }
        return (
          <div className="DialogCtn">
            <div className={this.getMaskClassName()} />
            <div className={this.getDialogClassName()}>
              <div className="player-close-btn" onClick={this.props.onCancel}>关闭</div>
              <div className="player-musicName"><strong>{name}</strong></div>
              <video autoPlay="autoPlay" src={url} />
              <div className="current-play-time">/{this.formatSeconds(du)}</div>
              <div className="control-btn">{this.showStatusIcon()}
                <div className="progress-bar"><div className="inner-bar" ><div className="player-btn" /></div></div>
              </div>
            </div>
          </div>
        );
      }
}

export default InterceptDialog;
