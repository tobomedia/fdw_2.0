import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../redux/actions';

import Search from './Search';

export const mapStateToProps = (state, ownProps) => {
    const { match: { params } } = ownProps;
    const { search, actors, actresses, creatives } = state;

    return {
        params,
        search,
        actors,
        actresses,
        creatives
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        searchArtist: (term, range) => {
            dispatch(Actions.searchArtist(term,range));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
