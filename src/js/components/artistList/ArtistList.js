import React, { Component, PropTypes } from 'react';
import extractName from '../../extractName';

import ArtistItem from './ArtistItem';
import ArtistSearch from './ArtistSearch';

class ArtistList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        if (!this.props[this.props.params.clientRange].length) {
            this.props.getArtists(this.props.params.clientRange)
        }
        if (!this.props.newsArray.length) {
            this.props.getNews();
        }
    }

    componentWillReceiveProps(newProps) {
            if (!newProps[newProps.params.clientRange].length && this.props.params.clientRange !== newProps.params.clientRange) {
                this.props.getArtists(newProps.params.clientRange)
            }
    }

    render() {
        return (<div>
            <ArtistSearch {...this.props} />

            <div className="c-client-list">
                {this.props[this.props.params.clientRange].map((item,index) => {
                    let spotlightLink = (/http(s)?\:\/\//.test(item.linko[0]) || /\/[backdoor_bios]+/.test(item.linko[0]) ? item.linko[0] : false);
                    // debugger;
                    let clientName = item.bio[0];

                    return (<ArtistItem hasNews={(this.props.newsObject[clientName] ? true : false)} key={clientName} index={index} item={item} spotlightLink={spotlightLink} clientName={clientName} delay={100} />)}
                        )}
                </div>
            </div>)}

}

export default ArtistList
