import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

class NavList extends Component {
    render() {
        return <div className="c-main-navigation__link-list">
            <div className="c-main-navigation__link-item">
                <Link to="/actors/actresses_a_k">Actresses A~K</Link>
            </div>
            <div className="c-main-navigation__link-item">
                <Link to="/actors/actresses_l_z">Actresses L~Z</Link>
            </div>
            <div className="c-main-navigation__link-item">
                <Link to="/actors/actors_a_k">Actors A~K</Link>
            </div>
            <div className="c-main-navigation__link-item">
                <Link to="/actors/actors_l_z">Actors L~Z</Link>
            </div>
        </div>
    }
}

export default NavList
