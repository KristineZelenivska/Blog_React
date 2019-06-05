import { store } from '../../index.js';
//actions
//store.dispatch({ type: 'SHOW_POSTS', payload: 'some data' });

const addPostSuccess = () => {
  return {
    type: 'ADD_POST',
  };
};
// const addPostError = () => {
//   return {
//     type: 'ADD_POST_ERROR', //required property
//   };
// };

export const addPost = () => {
  return store.dispatch(addPostSuccess());
  // .catch(() => dispatch(addPostError()))
};

export const onChange = (author, date, text) => {
  return;
  store
    .dispatch({
      type: 'CHANGE_AUTHOR',
      payload: author,
    })
    .dispatch({
      type: 'CHANGE_DATE',
      payload: date,
    })
    .dispatch({
      type: 'CHANGE_TEXT',
      payload: text,
    });
};

// const showPostsSuccess = (author, date, text) => {
//   return {
//     type: 'SHOW_POSTS',
//     payload: [author, date, text],
//   };
// };

// export const getPosts = (author, date, text) => {
//   return (dispatch) => showPostsSuccess(author, date, text);
// };
