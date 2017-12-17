import { Game, createMatrix } from '../records';

export default (state = new Game(), action) => {
  switch (action.type) {
    case 'UPDATE_GAME_STATE':
      return state.update('gameState', () => action.gameState);
    case 'CREATE_GAME_MATRIX':
      return state.set('matrix', createMatrix(action.width, action.height));
    case 'RESET_GAME':
      return new Game();
    case 'PAUSE_GAME':
      return state.set('gameState', 'PAUSED');
    default:
      return state;
  }
};
