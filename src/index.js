import './polyfills';
import './config';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import Forms from './components/addPost/addPost';
import Posts from './components/showPosts/showPosts';
import OtherPage from './components/otherForm';
import showResults from './components/otherForm/showResults';
// import ShowValues from './components/otherForm/values';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './index.sass';

ReactDOM.render(
  <Provider store={store}>
    {/* <OtherForm onSubmit={showResults} /> */}
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/forms" component={Forms} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/other" component={OtherPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();

// window.createStore = createStore;
// window.compose = compose;
