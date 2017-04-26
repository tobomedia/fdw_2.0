import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import '../../style/nav.scss';

class Nav extends Component {
    constructor() {
        super();

        this.state = {menu : false};
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick() {
        this.setState({menu: !this.state.menu})
    }

    componentWillMount() {
        this.setState({menu: false});
    }

    renderNavList(state) {
        if (state) {
            return <div key="one" className={`c-main-navigation__link-list ${( this.state.menu ? '' : 'c-main-navigation__link-list--closed')}`}>
                <div onClick={this.handleMenuClick} className="c-main-navigation__link-item">
                    <Link to="/actors/actresses_a_k">Actresses A~K</Link>
                </div>
                <div onClick={this.handleMenuClick} className="c-main-navigation__link-item">
                    <Link to="/actors/actresses_l_z">Actresses L~Z</Link>
                </div>
                <div onClick={this.handleMenuClick} className="c-main-navigation__link-item">
                    <Link to="/actors/actors_a_k">Actors A~K</Link>
                </div>
                <div onClick={this.handleMenuClick} className="c-main-navigation__link-item">
                    <Link to="/actors/actors_l_z">Actors L~Z</Link>
                </div>
                <div onClick={this.handleMenuClick} className="c-main-navigation__link-item">
                    <Link to="/news">News</Link>
                </div>
            </div>
        }
    }

    render() {

        return <div>
                <div onClick={this.hideLoading} className="c-main-navigation">
                    <a href="/prototype">
                        <img className="e-logo e-logo__desktop" src="/prototype/assets/img/logo.svg" />
                        <img className="e-logo e-logo__mobile" src="/prototype/assets/img/logo-mobile.svg" />
                    </a>
                    <img onClick={this.handleMenuClick} className="c-main-navigation__mob-menu" src="/prototype/assets/img/hamburger.svg" style={{width: '50px', float: 'left'}} />
                    <CSSTransitionGroup
                          transitionName="menu"
                          transitionEnterTimeout={500}
                          transitionLeaveTimeout={300}>
                        {this.renderNavList(this.state.menu)}
                    </CSSTransitionGroup>
                </div>

            <div className="c-main-content">
                {this.props.children}
            </div>
        </div>
    }
}

export default Nav
