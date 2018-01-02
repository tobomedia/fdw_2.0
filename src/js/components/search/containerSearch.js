import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../redux/actions';

import Search from './Search';

export const mapStateToProps = (state, ownProps) => {
    const { match: { params } } = ownProps;
    const { search, actors, actresses, creatives, newsObject } = state;

    return {
        params,
        search,
        actors,
        actresses,
        creatives,
        newsObject
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getArtists: (url) => {
            dispatch(Actions.getActors(url));
        },
        getCreatives: () => {
            dispatch(Actions.getCreatives('creatives'));
        },
        getNews: () => {
            dispatch(Actions.getNews());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
