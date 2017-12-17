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
