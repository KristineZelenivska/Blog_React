import { combineReducers } from 'redux';

import posts from './posts';
import forms from './form';
import otherFun from './otherForm';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  posts,
  forms,
  // form: reduxFormReducer,
  form: reduxFormReducer.plugin({
    humanData: otherFun,
  }),
});
