import { List } from 'immutable';
import { Player } from '../records';

const pieces = 'IJLOSTZ';
const piecesLength = pieces.length;

const createPiece = type => {
  switch (type) {
    case 'I':
      return List.of(
        List.of(0, 1, 0, 0),
        List.of(0, 1, 0, 0),
        List.of(0, 1, 0, 0),
        List.of(0, 1, 0, 0)
      );
    case 'J':
      return List.of(List.of(0, 2, 0), List.of(0, 2, 0), List.of(2, 2, 0));
    case 'L':
      return List.of(List.of(0, 3, 0), List.of(0, 3, 0), List.of(0, 3, 3));
    case 'O':
      return List.of(List.of(4, 4), List.of(4, 4));
    case 'S':
      return List.of(List.of(0, 5, 5), List.of(5, 5, 0), List.of(0, 0, 0));
    case 'T':
      return List.of(List.of(0, 6, 0), List.of(6, 6, 6), List.of(0, 0, 0));
    case 'Z':
      return List.of(List.of(7, 7, 0), List.of(0, 7, 7), List.of(0, 0, 0));
    default:
      throw new Error(`unsupported piece ${type}`);
  }
};

const createRandomPiece = () => {
  return createPiece(pieces[Math.round(piecesLength * Math.random())]);
};

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
