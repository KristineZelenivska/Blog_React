import './polyfills';
import './config';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.sass';

import { postReducer } from './redux/reducers/index.js';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import Forms from './components/addPost/addPost';
import Posts from './components/showPosts/showPosts';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

export const store = createStore(postReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
store.subscribe(() => {
  console.log('store changed', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/forms" component={Forms} />
        <Route exact path="/posts" component={Posts} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();

// window.createStore = createStore;
// window.compose = compose;
