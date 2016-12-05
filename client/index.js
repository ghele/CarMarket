import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import css from './styles/style.styl';

import store from './store';
import App from './components/App';

// Connect the sore to the Provider
const carHandler = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(carHandler, document.getElementById('root'));
