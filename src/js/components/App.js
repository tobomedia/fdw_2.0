import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import ListContainer from './ListContainer';
import Home from './Home';
import News from './News';
import Creatives from './Creatives';

class App extends Component {
    render() {
        return <div>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/actors/:clientRange" component={ListContainer} />
                <Route path="/news" component={News} />
                <Route path="/creatives" component={Creatives} />
            </Switch>
        </div>
    }
}


export default App
