import './polyfills';
import './config';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import './index.sass';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

window.createStore = createStore;
window.compose = compose;
