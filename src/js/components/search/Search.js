import React, { Component, PropTypes } from 'react';

class Search extends Component {
    constructor() {
        super();
    }

    render() {

        return (<div>
            <h1>Search content {this.props.params.term}</h1>
        </div>)
    }
}

export default Search
