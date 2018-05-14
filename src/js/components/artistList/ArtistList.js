import React, { Component, PropTypes } from "react";
import extractName from "../../extractName";

import ArtistSearch from "./ArtistSearch";

class ArtistList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        if (!this.props[this.props.params.clientRange].length) {
            this.props.getArtists(this.props.params.clientRange);
        }
        if (!this.props.newsArray.length) {
            this.props.getNews();
        }
    }

    componentWillReceiveProps(newProps) {
        if (
            !newProps[newProps.params.clientRange].length &&
            this.props.params.clientRange !== newProps.params.clientRange
        ) {
            this.props.getArtists(newProps.params.clientRange);
        }
    }

    render() {
        return (
            <div>
                <ArtistSearch {...this.props} />
            </div>
        );
    }
}

ArtistList.propTypes = {
    params: PropTypes.shape({
        clientRange: PropTypes.string
    })
};

export default ArtistList;
