import * as ActionTypes from '../const/ActionTypes';

export default {
  // 修改选择的状态 单选 多选
  setSeltedStatus: data => ({
    type: ActionTypes.SET_SELTED_STATUS,
    data
  }),
  // 添加到单选中
  addSingelSelted: data => ({
    type: ActionTypes.ADD_SINGLE_SELTED,
    data
  }),
  // 添加到多选列表中
  addMultipleSelted: data => ({
    type: ActionTypes.ADD_MULTIPLE_SELTED,
    data
  }),
  // 将音乐重命名
  renameMusic: data => ({
    type: ActionTypes.RENAME_MUSIC,
    data
  }),
  // 将音乐删除
  deleteMusic: data => ({
    type: ActionTypes.DELETE_MUSIC,
    data
  }),
  // 删除后清空state中的选中的音乐
  deleteRemainMusic: () => ({
    type: ActionTypes.DELETE_REMAIN_MUSIC
  })
};
