import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

import '../../style/nav.scss';

class Nav extends Component {
    constructor() {
        super();

        this.state = {menu : false};
        this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    }

    handleHamburgerClick() {
        if(this.state.menu) {
            this.setState({menu: false})
        } else {
            this.setState({menu: true})
        }
    }

    render() {

        return <div>
                <div onClick={this.hideLoading} className="c-main-navigation">
                    <Link to="/">
                        <img className="e-logo" src="/src/img/logo.svg" />
                    </Link>
                    <img onClick={this.handleHamburgerClick} className="c-main-navigation__mob-menu" src="/src/img/hamburger.svg" style={{width: '50px', float: 'left'}} />
                    <div className={`c-main-navigation__link-list ${( this.state.menu ? '' : 'c-main-navigation__link-list--closed')}`}>
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
                </div>

            <div className="c-main-content">
                {this.props.children}
            </div>
        </div>
    }
}

export default Nav
