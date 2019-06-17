/**
 * form.text reducer
 */
export default (state = '', { type, payload }) => {
  switch (type) {
    case 'ADD_POST':
      return '';
    case 'EDIT_POST':
      return '';
    case 'CHANGE_TEXT':
      return payload;

    default:
      return state;
  }
};
