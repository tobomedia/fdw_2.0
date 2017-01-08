import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
/* CSS */
import './src/style/style.scss';
/* components */
import Nav from './src/js/components/Nav';
import ListContainer from './src/js/components/ListContainer';
import Home from './src/js/components/Home';

ReactDOM.render(
<div className="container">
    <Router history={browserHistory} >
        <Route path="/" component={Nav} >
            <IndexRoute component={Home}/>
            <Route path="/actors/:clientRange" component={ListContainer} />
        </Route>
    </Router>
</div>, document.getElementById('app'));
