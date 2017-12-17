import { Record, List } from 'immutable';

export const Position = Record({ x: 0, y: 0 });

export const Player = Record({
  matrix: List(),
  position: Position(),
  score: 0
});

export const Game = Record({
  width: 200,
  height: 400,
  viewBox: '0 0 10 20',
  gameState: 'LOADING',
  matrix: List(),
  position: Position()
});

export const createMatrix = (width, height) =>
  List()
    .setSize(height)
    .map(() =>
      List()
        .setSize(width)
        .map(() => 0)
    );

export const createPiece = type => {
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

const pieces = 'IJLOSTZ';
const piecesLength = pieces.length;

export const createRandomPiece = () => {
  return createPiece(pieces[(piecesLength * Math.random()) | 0]);
};
