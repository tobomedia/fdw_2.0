import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import ListContainer from './ListContainer';
import Home from './Home';
import News from './News';
import About from './About';
import Team from './Team';
import History from './History';

class App extends Component {
    render() {
        return <div>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/actors/:clientRange" component={ListContainer} />
                <Route path="/news/:client?" component={News} />
                <Route path="/about-us" component={About} />
                <Route path="/team" component={Team} />
                <Route path="/history" component={History} />
            </Switch>
        </div>
    }
}


export default App
