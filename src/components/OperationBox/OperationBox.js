import React from 'react';
import './OperationBox.css';

const shareSong = (single, entities) => {
  if (entities.commendMusic[single]) {
    window.alert(`送出音乐 ${entities.commendMusic[single].name}`);
  } else if (entities.myMusic[single]) {
    window.alert(`送出音乐 ${entities.myMusic[single].name}`);
  }
};

const RenderPlayerButton = props => {
  let flag;
  if (props.selted === 'singleton') {
    if (Object.keys(props.single).length > 0) {
      flag = false;
    } else {
      flag = true;
    }
  } else {
    flag = false;
  }
  if (flag == true) {
    return (
      <div className="oper-btn">
        <img src={require('../../icons/button_new_play.png')} alt="" />
        <div>播放</div>
      </div>
    );
  }
  return (
    <div className="oper-btn">
      <img src={require('../../icons/button_new_play_gray.png')} alt="" />
      <div className="unuse-title">播放</div>
    </div>
  );
};
const RenderRenameButton = props => {
  let flag;
  if (props.selted === 'singleton') {
    if (Object.keys(props.single).length > 0) {
      flag = false;
    } else if (props.entities.commendMusic[props.single]) {
      flag = false;
    } else if (props.entities.myMusic[props.single].plp) {
      flag = false;
    } else flag = true;
  } else {
    flag = false;
  }
  if (flag == true) {
    return (
      <div className="oper-btn" onClick={props.handleShowRenameDialog}>
        <img src={require('../../icons/button_rename_red.png')} alt="" />
        <div>重命名</div>
      </div>
    );
  } return (
    <div className="oper-btn">
      <img src={require('../../icons/button_rename_gray.png')} alt="" />
      <div className="unuse-title">重命名</div>
    </div>
  );
};
const RenderCutMusicButton = props => {
  let flag;
  if (props.selted === 'singleton') {
    if (Object.keys(props.single).length > 0) {
      flag = false;
    } else if (props.entities.commendMusic[props.single]) {
      flag = false;
    } else flag = true;
  } else {
    flag = false;
  }
  if (flag == true) {
    return (
      <div className="oper-btn">
        <img src={require('../../icons/button_cut.png')} alt="" />
        <div>选择片段</div>
      </div>
    );
  } return (
    <div className="oper-btn">
      <img src={require('../../icons/button_cut_gray.png')} alt="" />
      <div className="unuse-title">选择片段</div>
    </div>
  );
};
const RenderShareButton = props => {
  let flag;
  if (props.selted === 'singleton') {
    if (Object.keys(props.single).length > 0) {
      flag = false;
    } else if (props.entities.commendMusic[props.single]) {
      flag = false;
    } else flag = true;
  } else {
    flag = false;
  }
  if (flag == true) {
    return (
      <div
        className="oper-btn"
        onClick={() => {
        shareSong(
        props.single,
        props.entities
       );
      }}
      >
        <img src={require('../../icons/button_share.png')} alt="" />
        <div>送给朋友</div>
      </div>
    );
  } return (
    <div className="oper-btn">
      <img src={require('../../icons/button_share_gray.png')} alt="" />
      <div className="unuse-title">送给朋友</div>
    </div>
  );
};
const RenderDeleteButton = props => {
  let flag;
  let res;
  if (props.selted === 'singleton') {
    if (Object.keys(props.single).length > 0) {
      flag = false;
    } else if (props.entities.commendMusic[props.single]) {
      flag = false;
    } else flag = true;
  } else {
    const arr = props.multi;
    for (let i = 0; i < arr.length; i++) {
      if (props.entities.commendMusic[arr[i]]) {
        res = false;
      }
    }
    if (res == false || arr.length < 1) {
      flag = false;
    } else {
      flag = true;
    }
  }
  if (flag == true) {
    return (
      <div className="oper-btn" onClick={props.handleShowDelDialog}>
        <img src={require('../../icons/button_delete.png')} alt="" />
        <div>删除</div>
      </div>
    );
  } return (
    <div className="oper-btn">
      <img src={require('../../icons/button_delete_gray.png')} alt="" />
      <div className="unuse-title">删除</div>
    </div>
  );
};

const OperationBox = props => (
  <div className="box">
    <RenderPlayerButton
      selted={props.basicInfo.selted}
      single={props.basicInfo.single}
    />
    <RenderRenameButton
      selted={props.basicInfo.selted}
      single={props.basicInfo.single}
      entities={props.entities}
    />
    <RenderCutMusicButton
      selted={props.basicInfo.selted}
      single={props.basicInfo.single}
      entities={props.entities}
    />
    <RenderShareButton
      selted={props.basicInfo.selted}
      single={props.basicInfo.single}
      entities={props.entities}
    />
    <RenderDeleteButton
      selted={props.basicInfo.selted}
      single={props.basicInfo.single}
      multi={props.basicInfo.multi}
      entities={props.entities}
      handleShowDelDialog={props.handleShowDelDialog}
    />
  </div>
);

export default OperationBox;
