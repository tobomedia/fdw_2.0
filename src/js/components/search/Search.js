import React, { Component, PropTypes } from 'react';

import ArtistItem from '../ui/ArtistItem';

class Search extends Component {
    constructor() {
        super();
        this.showActors = this.showActors.bind(this);
        this.showActresses = this.showActresses.bind(this);
    }

    componentDidMount() {
        if (!this.props.newsObject.length) {
            this.props.getNews();
        }
    }

    showActors() {
        if (this.props.actors.length) {
            const result = this.props.actors.filter(actor => {
                return actor.bio[0].indexOf(this.props.params.term.toLowerCase()) > -1
            });
            return result.map((actor,index) => {
                let spotlightLink = (/http(s)?\:\/\//.test(actor.linko[0]) || /\/[backdoor_bios]+/.test(actor.linko[0]) ? actor.linko[0] : false);
                let clientName = actor.bio[0];
                return <ArtistItem hasNews={(this.props.newsObject && this.props.newsObject[clientName] ? true : false)} key={index+clientName} index={index} item={actor} spotlightLink={spotlightLink} clientName={clientName} />
            })
        } else {
            this.props.getArtists('actors');
            return null
        }
    }

    showActresses() {
        if (this.props.actresses.length) {
            const result = this.props.actresses.filter(actress => {
                return actress.bio[0].indexOf(this.props.params.term.toLowerCase()) > -1
            });
            return result.map((actress,index) => {
                let spotlightLink = (/http(s)?\:\/\//.test(actress.linko[0]) || /\/[backdoor_bios]+/.test(actress.linko[0]) ? actress.linko[0] : false);
                let clientName = actress.bio[0];
                return <ArtistItem hasNews={(this.props.newsObject && this.props.newsObject[clientName] ? true : false)} key={index+clientName} index={index} item={actress} spotlightLink={spotlightLink} clientName={clientName} />
            });
        } else {
            this.props.getArtists('actresses');
            return null
        }
    }

    showCreatives() {
        if (this.props.creatives.length) {
            const result = this.props.creatives.filter(creative => {
                return creative.bio[0].indexOf(this.props.params.term.toLowerCase()) > -1
            });
            return result.map((creative,index) => {
                let spotlightLink = (/http(s)?\:\/\//.test(creative.linko[0]) || /\/[backdoor_bios]+/.test(creative.linko[0]) ? creative.linko[0] : false);
                let clientName = creative.bio[0];
                return <ArtistItem hasNews={(this.props.newsObject && this.props.newsObject[clientName] ? true : false)} key={index+clientName} index={index} item={creative} spotlightLink={spotlightLink} clientName={clientName} />
            });
        } else {
            this.props.getCreatives();
            return null
        }
    }

    render() {

        return (<div>
            <h1>Search content: {this.props.params.term}</h1>
            <hr/>
            <h2>Actors</h2>
            <div className="c-client-list">
                {this.showActors()}
            </div>
            <hr/>
            <h2>Actresses</h2>
            <div className="c-client-list">
                {this.showActresses()}
            </div>
            <hr/>
            <h2>Creatives</h2>
            <div className="c-client-list">
                {this.showCreatives()}
            </div>
        </div>)
    }
}

export default Search
