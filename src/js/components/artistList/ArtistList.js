import React, { Component, PropTypes } from 'react';
import extractName from '../../extractName';

import ArtistItem from './ArtistItem';
import ArtistSearch from './ArtistSearch';

class ArtistList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
            this.props.getArtists(this.props.params.clientRange)
    }

    componentWillReceiveProps(newProps) {
            if (this.props.params.clientRange !== newProps.params.clientRange) {
                this.props.getArtists(newProps.params.clientRange)
            }
    }

    render() {
        return (<div>
            <ArtistSearch {...this.props} />

            <div className="c-client-list">
                {this.props[this.props.params.clientRange].map((item,index) => {
                    let spotlightLink = (/http(s)?\:\/\//.test(item.linko[0]) || /\/[backdoor_bios]+/.test(item.linko[0]) ? item.linko[0] : false);
                    let clientName = extractName(item.caption[0]);

                    return (<ArtistItem key={clientName} index={index} item={item} spotlightLink={spotlightLink} clientName={clientName} delay={100} />)}
                        )}
                </div>
            </div>)}

}

export default ArtistList
