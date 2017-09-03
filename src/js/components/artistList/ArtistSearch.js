import React, { Component, PropTypes } from 'react';

class ArtistSearch extends Component {
    constructor() {
        super();
    }

    render() {
        return (<div style={{textAlign:'center'}}>
                <label>Search Artists &nbsp;
                <input type="text" name="search"/>
                </label>
            </div>)
    }
}

export default ArtistSearch
