const defaultState = [];

export default (state = defaultState, { type, payload, id }) => {
  switch (type) {
    case 'ADD_POST':
      return [...state, payload];
    case 'EDIT_POST':
      // return [...state.filter((post) => post.id !== id), { ...state.find((post) => post.id === id), text: payload }]; этот вариант отже работал, но добавлял edited пост в конце других постов
      // eslint-disable-next-line no-case-declarations
      const i = state.findIndex((post) => post.id === id);
      state[i].text = payload;
      return [...state];
    case 'DELETE_POST':
      return [...state.filter((post) => post.id !== id)];
    default:
      return state;
  }
};
