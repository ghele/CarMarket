// let's go!
// EDMUNDS API http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=e6jd7d4rx7qx64r5dskzwdwc
import 'babel-polyfill';
import css from './styles/style.styl';
import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import Main from './components/containers/Main';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store';

const router = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(router, document.getElementById('root'));
