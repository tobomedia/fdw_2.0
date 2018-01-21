import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import SearchInput from './SearchInput';

import '../../style/nav.scss';

class Nav extends Component {
    constructor() {
        super();

        this.state = {menu : true};
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleMobileSelect = this.handleMobileSelect.bind(this);
        this.handleMobileMenuToggle = this.handleMobileMenuToggle.bind(this);
    }

    handleMenuClick(e) {
        e.preventDefault();
        document.querySelector('.c-main-navigation__link-list').scrollIntoView(false);
    }

    handleMobileMenuToggle(e) {
        e.preventDefault();
        this.setState({'menu':!this.state.menu})
    }

    scrollTop() {
        document.querySelector('.e-logo').scrollIntoView(true)
    }

    handleMobileSelect(e) {
        this.props.history.push(`/${e.target.value}`);
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

                    <SearchInput />

                    <div key="one" className={`c-main-navigation__link-list ${(this.state.menu ? 'c-main-navigation__link-list--show' : '')}`}>
                        <a href="javascript://" onClick={this.handleMobileMenuToggle} className="c-main-navigation__hamburger">
                            <img src="assets/img/hamburger.svg" width="20px" height="20px" />
                        </a>
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
                            <Link to="/contact-us">Contact</Link>
                        </div>
                    </div>
                </div>

                <select className="c-main-navigation-mobile" onChange={this.handleMobileSelect}>
                    <option value="home">Home</option>
                    <option value="actresses">Actresses</option>
                    <option value="actors">Actors</option>
                    <option value="creatives">Creatives</option>
                    <option value="news">News</option>
                    <option value="about">About Us</option>
                    <option value="contact">Contact</option>
                </select>

            <div className="c-main-content">
                {this.props.children}
            </div>
            <a href="https://twitter.com/felixdewolfe" target="_blank"><img src="/mobile/assets/img/twitter-logo.svg" width="30px" height="30px" /></a>
        </div>)
    }
}

export default withRouter(Nav)
