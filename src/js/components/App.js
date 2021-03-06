import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Nav';
// import ListContainer from './ListContainer';
import News from './newsList/containNewsList';
import ArtistList from './artistList/containArtistList';
import Search from './search/containerSearch';
import Home from './Home';
import About from './About';
import History from './History';
import ContactUs from './ContactUs';

class App extends Component {
    render() {
        return <div>
            <Nav>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about-us" component={About} />
                <Route path="/history" component={History} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/news/:client?" component={News} />
                <Route path="/search/:term" component={Search} />
                <Route path="/:clientRange" component={ArtistList} />
            </Switch>
        </Nav>
        </div>
    }
}


export default App
