import { Player, createRandomPiece } from '../records';

export default (state = new Player(), action) => {
  switch (action.type) {
    case 'SET_PLAYER_MATRIX':
      return state.set('matrix', createRandomPiece());
    case 'ROTATE_PLAYER_PIECE':
      return state;
    case 'MOVE_PLAYER_DOWN':
      return state.updateIn(['position', 'y'], y => y + 1);
    case 'MOVE_PLAYER_LEFT':
      return state.updateIn(['position', 'x'], x => x - 1);
    case 'MOVE_PLAYER_RIGHT':
      return state.updateIn(['position', 'x'], x => x + 1);
    default:
      return state;
  }
};
