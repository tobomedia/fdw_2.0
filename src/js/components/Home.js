import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';

import '../../style/home.scss';

class Home extends Component {
    render() {
        return <div className="home-block">
            <div className="home-block__module">
                <h1>Actors</h1>
                <Link className="home-block__links" to="/actors/actors_a_k">A-K</Link>
                <Link className="home-block__links" to="/actors/actors_l_z">L-Z</Link>
            </div>
            <div className="home-block__module">
                <h1>Actresses</h1>
                <Link className="home-block__links" to="/actors/actresses_a_k">A-K</Link>
            <Link className="home-block__links" to="/actors/actresses_l_z">L-Z</Link>
            </div>
            <div className="home-block__module">
                <Link to="/creatives"><h1>Creatives</h1></Link>
            </div>
            <div className="home-block__module">
                <Link to="/news"><h1>News</h1></Link>
            </div>
        </div>
    }
}

export default Home
