import { List } from 'immutable';
import { Game } from '../records';

export const createMatrix = (width, height) =>
  List()
    .setSize(height)
    .map(() =>
      List()
        .setSize(width)
        .map(() => 0)
    );

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
