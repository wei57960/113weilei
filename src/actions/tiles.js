import * as ActionTypes from './action-types';
import { v4 } from 'node-uuid';
import flatten from 'lodash.flatten';
import { sleep } from '../utils';

const getRandomCoordinate = tiles => { // 获得随机坐标
  let emptyTiles = flatten(tiles.map((rows, i) => rows.map((tile, j) => {
    if(tile) return null;
    return [i, j];
  }))).filter(tile => !!tile);

  if (emptyTiles.length) {
    let index = Math.floor(Math.random() * emptyTiles.length);
    let [row, col] = emptyTiles[index];
    return {row, col};
  }
  return null;
};

export const generateNewTile = () => (dispatch, getState) => { //生成一个新块
  let { tiles } = getState();
  let coord = getRandomCoordinate(tiles);
  if (coord) {
    dispatch({
      type: ActionTypes.GENERATE_NEW_TILE,
      number: Math.random() > 0.8 ? 4 : 2,
      uuid: v4(),
      ...coord
    });
    return true;
  }
  return false;
};

export const moveTile = (payload) => (dispatch) => { //移动块 payload:row col destRow destCol
  dispatch({
    type: ActionTypes.MOVE_TILE,
    ...payload
  });
  return sleep(80).then(() => payload);
};

export const preMergeTile = (payload) => {   
  return {
    type: ActionTypes.PRE_MERGE_TILE,
    ...payload
  };
};

export const mergeTile = ({row, col}) => { //融合块
  return {
    type: ActionTypes.MERGE_TILE,
    row, col
  };
};

export const resetNewMergedTileTag = ({row, col}) => { 
  return {
    type: ActionTypes.RESET_NEW_MERGED_TILE_TAG,
    row, col
  };
};

export const resetNewGeneratedTileTag = ({row, col}) => {
  return {
    type: ActionTypes.RESET_NEW_GENERATED_TILE_TAG,
    row, col
  };
};
