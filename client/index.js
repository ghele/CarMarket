import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import css from './styles/style.styl';

import store from './store';
import App from './components/App';

const router = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
