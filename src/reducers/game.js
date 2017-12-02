import { Game } from '../records';

export default (state = new Game(), action) => {
  switch (action.type) {
    case 'SET_GAME_STATE':
      return state.set('gameState', action.gameState);
    case 'SET_GAME_MATRIX':
      return state.set('matrix', action.matrix);
    case 'RESET_GAME':
      return new Game();
    case 'PAUSE_GAME':
      return state.set('gameState', 'PAUSED');
    default:
      return state;
  }
};
