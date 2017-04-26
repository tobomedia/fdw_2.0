import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';
/* CSS */
import './src/style/style.scss';
/* components */
import App from './src/js/components/App';

ReactDOM.render(
<div className="container">
    <Router basename='/prototype'>
        <App/>
    </Router>
</div>, document.getElementById('app'));
