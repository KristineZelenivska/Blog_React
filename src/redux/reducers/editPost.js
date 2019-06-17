const defaultState = [];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'EDIT_POST':
      return [{ ...state, text: payload }];

    default:
      return state;
  }
};
