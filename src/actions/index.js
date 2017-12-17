import { batchActions } from 'redux-batch-enhancer';

export const updateGameState = gameState => ({
  type: 'UPDATE_GAME_STATE',
  gameState
});

export const setPlayerMatrix = () => ({
  type: 'SET_PLAYER_MATRIX'
});

export const createGameMatrix = (width, height) => ({
  type: 'CREATE_GAME_MATRIX',
  width,
  height
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

export const startGame = (width, height) =>
  batchActions([
    setPlayerMatrix(),
    createGameMatrix(width, height),
    updateGameState('PLAYING')
  ]);
