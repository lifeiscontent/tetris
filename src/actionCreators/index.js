const pieces = 'IJLOSTZ';

const createPiece = type => {
  switch (type) {
    case 'I':
      return [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]];
    case 'J':
      return [[0, 2, 0], [0, 2, 0], [2, 2, 0]];
    case 'L':
      return [[0, 3, 0], [0, 3, 0], [0, 3, 3]];
    case 'O':
      return [[4, 4], [4, 4]];
    case 'S':
      return [[0, 5, 5], [5, 5, 0], [0, 0, 0]];
    case 'T':
      return [[0, 6, 0], [6, 6, 6], [0, 0, 0]];
    case 'Z':
      return [[7, 7, 0], [0, 7, 7], [0, 0, 0]];
    default:
      throw new Error(`unsupported piece ${type}`);
  }
};

export const setPlayerMatrix = () => ({
  type: 'SET_PLAYER_MATRIX',
  matrix: createPiece(pieces[(pieces.length * Math.random()) | 0])
});

export const setGameMatrix = () => ({
  type: 'SET_GAME_MATRIX'
});

export const startGame = () => dispatch => dispatch(setPlayerMatrix());
