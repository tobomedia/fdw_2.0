import React from 'react';
import { connect } from 'react-redux';


import * as Actions from '../../redux/actions';

import News from './News';

export const mapStateToProps = (state, ownProps) => {
    const { match: { params } } = ownProps;
    const { newsArray } = state;

    return {
        params,
        newsArray
    }
};

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getNews() {
            dispatch(Actions.getNews());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(News);
