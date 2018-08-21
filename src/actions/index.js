import * as ActionTypes from './action-types';
import { generateNewTile, preMergeTile, moveTile, mergeTile } from './tiles';

export const startNewGame = () => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.START_NEW_GAME,
    size: getState().size
  });
  dispatch(generateNewTile());
  dispatch(generateNewTile());
};

export const setGameOver = () => {
  return {
    type: ActionTypes.GAME_OVER
  };
};

const MOVE_DIR = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0]
};

export const moveChessBoard = (dir) => (dispatch, getState) => {
  let { size, tiles } = getState();
  let dirOffset = MOVE_DIR[dir];
  let score = 0;
  let movingPromise;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let row = i, col = j;
      if (dir === 'right') {
        col = size - j - 1;
      }
      if (dir === 'down') {
        row = size - i - 1;
      }

      
      let tile = tiles[row][col];
      if (!tile) continue; 


      let nextCol = col + dirOffset[0];
      let nextRow = row + dirOffset[1];
      let nextTile;


      while (nextCol >= 0 && nextCol < size && nextRow >= 0 && nextRow < size) {
        nextTile = tiles[nextRow][nextCol];
        if (nextTile) {
          break;
        }
        nextCol += dirOffset[0];
        nextRow += dirOffset[1];
      }


      if (nextTile && !nextTile.tileToMerge && nextTile.number === tile.number) {
        let payload = {
          col, row,
          destCol: nextCol,
          destRow: nextRow
        };

        dispatch(preMergeTile(payload));
        movingPromise = dispatch(moveTile(payload));

        movingPromise.then(({ destCol: col, destRow: row }) => {
          dispatch(mergeTile({ row, col }));
        }).catch();

        ({ tiles } = getState());

        score += nextTile.number + tile.number; 
      } else {
        nextCol -= dirOffset[0];
        nextRow -= dirOffset[1];
        if (nextCol !== col || nextRow !== row) {
          movingPromise = dispatch(moveTile({
            row, col,
            destRow: nextRow,
            destCol: nextCol
          }));
          ({ tiles } = getState());
        }
      }
    }
  }

  return { movingPromise, score };
};

export * from './tiles';
export * from './scores';
