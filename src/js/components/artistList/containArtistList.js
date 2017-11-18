import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../redux/actions';

import ArtistList from './ArtistList';


export const mapStateToProps = (state, ownProps) => {
    const { match: { params } } = ownProps;
    const { actors, actresses, creatives, newsArray, newsObject, search } = state;

    return {
        params,
        actors,
        actresses,
        creatives,
        newsArray,
        newsObject,
        search
    }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtists: (artistType) => {
            if (artistType === 'actors' || artistType === 'actresses') {
                dispatch(Actions.getActors(artistType));
            } else if (artistType === 'creatives') {
                dispatch(Actions.getCreatives(artistType));
            }
        },
        getNews: () => {
            dispatch(Actions.getNews());
        },
        searchArtist: (term, range) => {
            dispatch(Actions.searchArtist(term,range));
        },
        clearSearch: () => {
            dispatch(Actions.clearSearch());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList);
