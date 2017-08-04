import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import '../../style/nav.scss';

class Nav extends Component {
    constructor() {
        super();

        this.state = {menu : true};
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(e) {
        e.preventDefault();
        document.querySelector('.c-main-navigation__link-list').scrollIntoView(false);
    }

    scrollTop() {
        document.querySelector('body').scrollTop = 0;
    }

    componentWillReceiveProps() {
        this.scrollTop();
    }

    componentDidMount() {
        this.scrollTop();
    }

    render() {
        return (<div>
                <div onClick={this.hideLoading} className="c-main-navigation">
                    <a href="/prototype">
                        <img className="e-logo e-logo__desktop" src="/prototype/assets/img/logo.svg" />
                    </a>
                    <a href onClick={this.handleMenuClick} className="c-main-navigation__mob-menu">
                        <span className="c-main-navigation__mob-menu-text">
                            Menu
                        </span>
                    </a>
                </div>

            <div className="c-main-content">
                {this.props.children}
            </div>
            <div key="one" className="c-main-navigation__link-list">
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
                <div className="c-main-navigation__link-item">
                    <Link to="/actors/creatives">Creatives</Link>
                </div>
                <div className="c-main-navigation__link-item">
                    <Link to="/about-us">About Us</Link>
                </div>
                <div className="c-main-navigation__link-item">
                    <Link to="/team">The Team</Link>
                </div>
                <div className="c-main-navigation__link-item">
                    <Link to="/news">News</Link>
                </div>
            </div>
        </div>)
    }
}

export default Nav
