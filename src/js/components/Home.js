import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';

import '../../style/home.scss';

class Home extends Component {
    render() {
        return <div className="home-block">
            <Link to="/actors">
                <div className="home-block__module">
                    <h1>Actors</h1>
                </div>
            </Link>
            <Link to="/actresses">
                <div className="home-block__module">
                    <h1>Actresses</h1>
                </div>
            </Link>
            <div className="home-block__module">
                <Link to="/actors/creatives"><h1>Creatives</h1></Link>
            </div>
            <div className="home-block__module">
                <Link to="/news"><h1>News</h1></Link>
            </div>
            <div className="home-block__module">
                <Link to="/About-us"><h1>About us</h1></Link>
            </div>
            <div className="home-block__module">
                <Link to="/history"><h1>History</h1></Link>
            </div>
            <div className="home-block__module">
                <Link to="/contact-us"><h1>Contact us</h1></Link>
            </div>
        </div>
    }
}

export default Home
