import redux, { combineReducers } from 'redux';

import author from './author';
import date from './date';
import text from './text';

/**
 * form reducer
 */
export default combineReducers({
  author,
  date,
  text,
});
