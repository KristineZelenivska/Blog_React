/**
 * form.date reducer
 */
export default (state = '', { type, payload }) => {
  switch (type) {
    case 'ADD_POST':
      return '';
    case 'EDIT_POST':
      return '';
    case 'CHANGE_DATE':
      return payload;
    default:
      return state;
  }
};
