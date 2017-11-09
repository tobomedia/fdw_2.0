import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';

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
                    <a href="/mobile">
                        <img className="e-logo e-logo__desktop" src="/mobile/assets/img/logo.svg" />
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
                    <Link to="/actresses">Actresses</Link>
                </div>
                <div className="c-main-navigation__link-item">
                    <Link to="/actors">Actors</Link>
                </div>
                <div className="c-main-navigation__link-item">
                    <Link to="/creatives">Creatives</Link>
                </div>
                <div className="c-main-navigation__link-item">
                    <Link to="/news">News</Link>
                </div>
                <div className="c-main-navigation__link-item">
                    <Link to="/about-us">About Us</Link>
                </div>
                <div className="c-main-navigation__link-item">
                    <Link to="/history">History</Link>
                </div>
                <div className="c-main-navigation__link-item">
                    <Link to="/contact-us">Contact Us</Link>
                </div>
                <div className="c-main-navigation__link-item">
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>)
    }
}

export default Nav
