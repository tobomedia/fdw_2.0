import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

import '../../style/home.scss';

class Home extends Component {
    render() {
        return <div className="home-block">
            <div className="home-block__module">
                <h1>Actors</h1>
                <a className="home-block__links" href="/actors/actors_a_k">A-K</a>
                <a className="home-block__links" href="/actors/actors_l_z">L-Z</a>
            </div>
            <div className="home-block__module">
                <h1>Actresses</h1>
                <a className="home-block__links" href="/actors/actresses_a_k">A-K</a>
                <a className="home-block__links" href="/actors/actresses_l_z">L-Z</a>
            </div>
            <div className="home-block__module">
                <a href="/creatives"><h1>Creatives</h1></a>
            </div>
            <div className="home-block__module">
                <a href="/news"><h1>News</h1></a>
            </div>
        </div>
    }
}

export default Home
