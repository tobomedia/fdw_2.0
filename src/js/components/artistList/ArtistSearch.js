import React, { Component, PropTypes } from 'react';

import ArtistItem from './ArtistItem';

class ArtistSearch extends Component {
    constructor() {
        super();

        this.renderSearch = this.renderSearch.bind(this);
        this.search = this.search.bind(this);
    }

    componentWillReceiveProps({params}) {
        if (params.clientRange !== this.props.params.clientRange) {
            this.props.clearSearch();
        }
    }

    search(e) {
        e.preventDefault();
        this.props.searchArtist(e.target.value,this.props.params.clientRange);
    }

    renderSearch() {
        let artistArray = (this.props.search.length ? this.props.search : this.props[this.props.params.clientRange]);

        return artistArray.map((item,index) => {
            let spotlightLink = (/http(s)?\:\/\//.test(item.linko[0]) || /\/[backdoor_bios]+/.test(item.linko[0]) ? item.linko[0] : false);
            let clientName = item.bio[0];

            return (<ArtistItem hasNews={(this.props.newsObject[clientName] ? true : false)} key={index+clientName} index={index} item={item} spotlightLink={spotlightLink} clientName={clientName} />)}
                )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.search} className="searchbox">
                    <input onChange={this.search} className="search-input" name="q" type="text" size="40" placeholder={`Search ${this.props.params.clientRange}`} />
                </form>
                <div className="c-client-list">
                    {this.renderSearch()}
                </div>
            </div>)
    }
}

ArtistSearch.propTypes = {
    search: PropTypes.array,
    params: PropTypes.shape({
        clientRange: PropTypes.string
    }),
    newsObject: PropTypes.object
}

export default ArtistSearch
