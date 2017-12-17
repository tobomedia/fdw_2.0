import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

import '../../style/search.scss';

class SearchInput extends Component {
    constructor() {
        super();
        this.search = this.search.bind(this);
    }

    search(e) {
        e.preventDefault();
        this.props.history.push(`/search/${e.target[0].value}`);
    }

    render() {
        return (<div>
            <form onSubmit={this.search} className="searchbox">
                <input className="search-input" name="q" type="text" size="40" placeholder='Search' />
            </form>
        </div>)
    }
}

export default withRouter(SearchInput)
