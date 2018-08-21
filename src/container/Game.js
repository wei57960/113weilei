import React, { Component } from 'react';
import GameBoard from '../components/GameBoard';
import Swipeable from 'react-swipeable';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { deepEach } from '../utils';
import { bindActionCreators } from 'redux';
import flatten from 'lodash.flatten';

class Game extends Component {
  componentDidMount () {
    this.props.gameActions.startNewGame();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSwiped = this.handleSwiped.bind(this);
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress (ev) {
    let { key } = ev;

    if (!this.props.gameStarted) return;
    let match = key.toLowerCase().match(/arrow(up|right|down|left)/);
    if (match) {
      this.move(match[1]);
      ev.preventDefault();
    }
  }

  handleSwiped (dir) {
    if (!this.props.gameStarted) return;
    this.move(dir);
    return false;
  }

  move (dir) {
    if (this.isMoving) return;
    let {movingPromise, score} = this.props.gameActions.moveChessBoard(dir);
    if (movingPromise) {
      this.isMoving = true;
      movingPromise.then(() => {
        score && this.props.gameActions.addScore(score);
        this.isMoving = false;
        this.props.gameActions.generateNewTile();
        this.checkGameStatus();
      });
    }
  }

  isMovable () {
    let movable = false;
    let { tiles, size } = this.props;
    // check each tile,
    // if there is any empty tile, sets movable to true
    // if there is any adjacent tile which has the same number, sets movable to true
    deepEach(tiles, tile => {
      if (movable) return; // break;
      if (!tile) {
        movable = true;
        return;
      }
      let {row: i, col: j} = tile;
      if (i < size - 1) {
        let bottomTile = tiles[i+1][j];
        if (bottomTile && bottomTile.number === tile.number) {
          movable = true;
          return;
        }
      }

      if (j < size - 1) {
        let rightTile = tiles[i][j+1];
        if (rightTile && rightTile.number === tile.number) {
          movable = true;
          return;
        }
      }
    });

    return movable;
  }

  checkGameStatus () {
    if (!this.isMovable()) {
      // game over
      this.props.gameActions.updateBestScore(this.props.score);
      this.props.gameActions.setGameOver();
    }
  }

  render () {
    let swipeOptions = ['up', 'right', 'down', 'left'].reduce((options, dir) => {
      let propName = `on-swiped-${dir}`.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase());
      options[propName] = this.handleSwiped.bind(this, dir);
      return options;
    }, {});

    return  <Swipeable {...swipeOptions} preventDefaultTouchmoveEvent>
      <GameBoard size={this.props.size} gameOver={this.props.gameOver}
      flatTiles={this.props.flatTiles} scores={this.props.scores}
       gameActions={this.props.gameActions}/>
    </Swipeable>;
  }
}

const flattenTiles = tiles => {
  let flatTiles = [];
  flatten(tiles).filter(tile => !!tile).forEach(tile => {
    flatTiles.push(tile);
    if (tile.tileToMerge) {
      flatTiles.push(tile.tileToMerge);
    }
  });
  return flatTiles.sort((tile1, tile2) => tile1.uuid > tile2.uuid ? 1 : -1);
};

const mapStateToProps = (state) => {
  return {
    size: state.size,
    tiles: state.tiles,
    score: state.scores.score,
    gameStarted: state.gameStatus === 'playing',
    gameOver: state.gameStatus === 'over',
    scores: state.scores,
    flatTiles: flattenTiles(state.tiles)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gameActions:bindActionCreators(actions,dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
