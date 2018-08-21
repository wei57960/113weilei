import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import './Tiles.css';

const TILE_WIDTH = 100;
const TILE_GAP = 10;

let Tile = (props) => {
  let {col, row} = props;
  let classMap = {
    tile: true,
    [`tile-${props.number}`]: true,
    'tile-new': props.newGenerated,
    'tile-merged': !!props.newMerged 
  };
  let classNames = Object.keys(classMap).filter(cls => !!classMap[cls]).join(' ');
  let x = col * ( TILE_WIDTH + TILE_GAP) + 'px';
  let y = row * ( TILE_WIDTH + TILE_GAP) + 'px';
  let style = {transform: `translate3d(${x}, ${y}, 0)`};
  return (
    <div className={classNames} style={style}>
      <div className="tile-inner" onAnimationEnd={props.onAnimationEnd}>{props.number}</div>
    </div>
  );
};

const mapDispatchToTileProps = (dispatch, ownProps) => {
  return {
    onAnimationEnd({animationName}) {
      // designed in css file
      let { col, row } = ownProps;
      if (animationName === 'a-tile-new') {
        dispatch(actions.resetNewGeneratedTileTag({ col, row }));
      } else if(animationName === 'a-tile-merged') {
        dispatch(actions.resetNewMergedTileTag({ col, row }));
      }
    }
  };
};

Tile = connect(null, mapDispatchToTileProps)(Tile);


 const Tiles = (props) =>{
  return ( <div className="tile-container">{props.flattenTiles.map(tile =>
    <Tile key={'tile-'+tile.uuid} {...tile}></Tile>
  )}</div>
);
};

export default Tiles;
