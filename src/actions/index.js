import { createRandomPiece, createMatrix } from '../records';

export const setGameState = gameState => ({
  type: 'SET_GAME_STATE',
  gameState
});

export const setPlayerMatrix = () => ({
  type: 'SET_PLAYER_MATRIX',
  matrix: createRandomPiece()
});

export const setGameMatrix = (width, height) => ({
  type: 'SET_GAME_MATRIX',
  matrix: createMatrix(width, height)
});

export const movePlayerDown = () => ({
  type: 'MOVE_PLAYER_DOWN'
});

export const movePlayerLeft = () => ({
  type: 'MOVE_PLAYER_LEFT'
});

export const movePlayerRight = () => ({
  type: 'MOVE_PLAYER_RIGHT'
});

export const startGame = () => (dispatch, getState) => {
  const { game } = getState();
  dispatch(setPlayerMatrix());
  dispatch(setGameMatrix(game.width, game.height));
  dispatch(setGameState('PLAYING'));
};
