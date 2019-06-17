export const addPost = (posts) => {
  return {
    type: 'ADD_POST',
    payload: posts,
  };
};

export const onAuthorChange = (author) => {
  return {
    type: 'CHANGE_AUTHOR',
    payload: author,
  };
};

export const onDateChange = (date) => {
  return {
    type: 'CHANGE_DATE',
    payload: date,
  };
};
export const onTextChange = (text) => {
  return {
    type: 'CHANGE_TEXT',
    payload: text,
  };
};

export const onTextEdit = (id, newText) => {
  console.log(newText);
  return {
    type: 'EDIT_POST',
    payload: newText,
    id,
  };
};
export const loadData = (profileData) => {
  return {
    type: 'LOAD_PROFILE',
    payload: profileData,
  };
};
export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id,
  };
};
