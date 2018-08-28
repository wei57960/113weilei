import React from 'react';
import 'antd/dist/antd.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';
import './index.css';
import TabsControl from '../components/TabsControl/TabsControl';
import MyMusic from './MyMusic';
import MusicSearched from './MusicSearched';
import MusicUploaded from './MusicUploaded';
import operationActions from '../actions/operation';

function onClickBack() {
  window.alert('go back');
}

class SongBook extends React.PureComponent {
  componentWillMount() {
    this.props.actions.login({ mid: 113 });
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <img src={require('../icons/return.png')} onClick={onClickBack} />
          <span className="desc-tile">影集制作</span>
          <span className="name">{this.props.loginInfo.nick}</span>
          <span className="finish-tile">完成</span>
        </div>
        <div className="choice-bar">
          <TabsControl>
            <div name="我的音乐" className="bar-box">
              <MyMusic
                actions={this.props.actions}
                operationActions={this.props.operationActions}
                entities={this.props.entities}
                musicList={this.props.musicList}
                basicInfo={this.props.basicInfo}
              />
            </div>
            <div name="搜索音乐" className="bar-box">
              <MusicSearched />
            </div>
            <div name="上传音乐" className="bar-box">
              <MusicUploaded />
            </div>
          </TabsControl>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  operationActions: bindActionCreators(operationActions, dispatch)
});

const mapStateToProps = state => {
  const {
    login: {
      loginInfo
    },
    basic: {
      basicInfo
    },
    entities,
    musicList
  } = state;
  return {
    loginInfo, basicInfo, entities, musicList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongBook);

