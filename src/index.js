import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'semantic-ui-css/semantic.min.css';
import Home from './components/home/index';

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.querySelector('#root')
);