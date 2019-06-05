import React, { PureComponent, Fragment } from 'react';
import Forms from '../components/addPost/addPost';
import Posts from '../components/showPosts/showPosts'
import { createStore, combineReducers } from 'redux';

import { Route, Switch, BrowserRouter } from "react-router-dom"
//////////////////////////////////////////////////////////
// const reducers = combineReducers({
//   post: postReducer,
// });

// const store = createStore(postReducer);
// store.subscribe(() => {
//   console.log('store changed', store.getState());
// });

//////////////////////////////////////////////////////////

class App extends PureComponent {
  render() {
    return (
      // <Provider store={store}>
        <Fragment>
          <div>
            <h1>Welcome to homepage</h1>
            </div>
          {/* <BrowserRouter>
          <Switch>
          <Route exact patch="/" component={Forms} />
            <Route exact patch="/forms" component={Forms} />
            <Route exact patch="/posts" component={Posts} />
          </Switch>
</BrowserRouter> */}
        </Fragment>
      // </Provider>
    );
  }
}

export default App;
