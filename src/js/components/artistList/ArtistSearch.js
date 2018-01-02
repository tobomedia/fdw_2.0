import React, { Component, PropTypes } from 'react';

import ArtistItem from '../ui/ArtistItem';

class ArtistSearch extends Component {
    constructor() {
        super();

        this.renderSearch = this.renderSearch.bind(this);
    }

    componentWillReceiveProps({params}) {
        if (params.clientRange !== this.props.params.clientRange) {
            this.props.clearSearch();
        }
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
        return (<div>
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
