const initialState = {
  width: 200,
  height: 400,
  cellSize: 20,
  gameState: 'LOADING',
  matrix: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GAME_STATE':
      return { ...state, gameState: action.gameState };
    case 'SET_GAME_MATRIX':
      return { ...state, matrix: action.matrix };
    case 'RESET_GAME':
      return initialState;
    case 'PAUSE_GAME':
      return { ...state, gameState: 'PAUSED' };
    default:
      return state;
  }
};
