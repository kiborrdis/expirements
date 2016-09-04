import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'App.jsx';
import {AJAX} from 'utils/ajax.js';
import {enviromentApp} from "data/reducers/reducers.js";
import {createPlanet, fetchPlanets} from "data/actions/actions.js";


let loggerMiddleware = createLogger();
let store = createStore(enviromentApp,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware));
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
