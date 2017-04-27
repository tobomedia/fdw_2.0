import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, IndexRoute } from 'react-router-dom';
/* CSS */
import './src/style/style.scss';
/* components */
import App from './src/js/components/App';

ReactDOM.render(
<div className="container">
    <Router>
        <App/>
    </Router>
</div>, document.getElementById('app'));
