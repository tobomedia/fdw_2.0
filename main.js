import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { HashRouter as Router } from 'react-router-dom';
import reducers from './src/js/redux/reducers';
/* CSS */
import './src/style/style.scss';
/* components */
import App from './src/js/components/App';

const store = createStore(reducers, applyMiddleware(logger))

ReactDOM.render(
<Provider store={store}>
    <div className="container">
        <Router>
            <App/>
        </Router>
    </div>
</Provider>, document.getElementById('app'));
