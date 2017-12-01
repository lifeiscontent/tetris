const initialState = {
  matrix: [],
  pos: { x: 0, y: 0 }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER_MATRIX':
      return { ...state, matrix: action.matrix };
    case 'ROTATE_PLAYER_PIECE':
      return state;
    case 'SET_PLAYER_POS':
      return { ...state, pos: action.pos };
    case 'MOVE_PLAYER_DOWN':
      return { ...state, pos: { ...state.pos, y: state.pos.y + 1 } };
    default:
      return state;
  }
};
