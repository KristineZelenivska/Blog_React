///////////////////////////////////////////////////////////

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  form: {
    author: null,
    date: null,
    text: null,
  },
  posts: [],
};

export const postReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, state.form],
        form: defaultState.form,
      };
    case 'CHANGE_AUTHOR':
      return {
        ...state,
        form: {
          ...state.form,
          author: payload,
        },
      };
    case 'CHANGE_DATE':
      return {
        ...state,
        form: {
          ...state.form,
          date: payload,
        },
      };
    case 'CHANGE_TEXT':
      return {
        ...state,
        form: {
          ...state.form,
          text: payload,
        },
      };

    default:
      return state;
  }
};

//завтра делай onchange/ actions
