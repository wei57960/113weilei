import React from 'react';
import './MusicList.css';
import '../ChoiceBox/ChoiceBox.css';

const ShowSelected = props => {
  if (props.selted === 'singleton') {
    if (props.single) {
      if (props.single === props.id) {
        return (<img
          src={require('../../icons/select_music.png')}
          alt="图片不存在"
          className="single-selected"
        />);
      }
      return (<img
        src={require('../../icons/select_music.png')}
        alt="图片不存在"
        className="single-unselected"
      />);
    }
    return (<img
      src={require('../../icons/select_music.png')}
      alt="图片不存在"
      className="single-unselected"
    />);
  } else if (props.selted === 'checkbox') {
    if (props.multi.length) {
      for (let i = 0; i < props.multi.length; i++) {
        if (props.multi[i] === props.id) {
          return (
            <div className="multi-selected" >
              <div className="multi-selected-num">{i + 1}</div>
            </div>
          );
        }
      }
    }
    return <div className="multi-unselected" />;
  }
  return null;
};
class MusicList extends React.PureComponent {
  handelClickMusic = (e, id) => {
    const { operationActions, basicInfo } = this.props;
    if (basicInfo.selted === 'singleton') {
      operationActions.addSingelSelted(id);
    } else {
      const arr = basicInfo.multi;
      const res = arr.indexOf(id);
      if (basicInfo.multi.length < 5 || res > 0) {
        operationActions.addMultipleSelted(id);
        return;
      }
      const box = document.getElementById('limit');
      box.style.display = 'block';
      setTimeout(() => { box.style.display = 'none'; }, 1000);
    }
  };

  renderMyMusicList = props => {
    if (props.entities) {
      const list = props.musicList.myMusicList;
      const entities = props.entities.myMusic;
      const newList = list.map(t => {
        const music = entities[t];
        return {
          ...music
        };
      });
      return newList.map((item, index) => (
        <div
          className="music-title"
          key={index}
          onClick={e => { this.handelClickMusic(e, item.id); }}
        >
          <span>
            <ShowSelected
              selted={this.props.basicInfo.selted}
              single={this.props.basicInfo.single}
              multi={this.props.basicInfo.multi}
              id={item.id}
            />
          </span>
          {item.name}
        </div>
      ));
    }
    return null;
  };

  renderMyCommendList = props => {
    if (props.entities) {
      const list = props.musicList.commendMusicList;
      const entities = props.entities.commendMusic;
      const newList = list.map(t => {
        const music = entities[t];
        return {
          ...music
        };
      });
      return newList.map((item, index) => (
        <div
          className="music-title"
          key={index}
          onClick={e => {
          this.handelClickMusic(e, item.id);
          }}
        >
          <span>
            <ShowSelected
              selted={this.props.basicInfo.selted}
              single={this.props.basicInfo.single}
              multi={this.props.basicInfo.multi}
              id={item.id}
            />
          </span>
          {item.name}
        </div>));
    }
    return null;
  };
  render() {
    return (
      <div>
        <div id="limit">多选最多选5首</div>
        <div>
          <div className="title my">我的音乐</div>
          {this.renderMyMusicList(this.props)}
        </div>
        <div>
          <div className="title">推荐音乐</div>
          {this.renderMyCommendList(this.props)}
        </div>
        <div className="blank" />
      </div>
    );
  }
}

export default MusicList;
