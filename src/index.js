import './polyfills';
import './config';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
<<<<<<< HEAD
=======

>>>>>>> b6ec3bc7369cfd16557a2378229716fb20cf4777
import './index.sass';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

<<<<<<< HEAD
window.createStore = createStore;
window.compose = compose;
=======
//global variable -accessible for everything
window.createStore = createStore;
window.compose = compose;
>>>>>>> b6ec3bc7369cfd16557a2378229716fb20cf4777
