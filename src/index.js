import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore,applyMiddleware} from 'redux';
import apiMiddleware from "./middleware/api";
import reducer from './reducer'; /** reducers/index.js */
import {Provider} from 'react-redux';

const store = createStore(reducer,applyMiddleware(apiMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));



