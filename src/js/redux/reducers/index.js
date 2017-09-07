import * as types from '../constants';

const INITIAL_STATE = {
    actors:[],
    actresses:[],
    creatives:[],
    newsArray: [],
    newsObject: {},
    search:[]
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RECEIVE_ACTORS:
        return Object.assign({}, state, {
            actors: action.data
        });
    case types.RECEIVE_ACTRESSES:
        return Object.assign({}, state, {
            actresses: action.data
        });
    case types.RECEIVE_CREATIVES:
        return Object.assign({}, state, {
            creatives: action.data
        });
    case types.RECEIVE_NEWS:
        return Object.assign({}, state, {
            newsArray: action.data.newsArray,
            newsObject: action.data.newsObject
        });
    case types.SEARCH_ARTIST:
    const result = state[action.data.range].filter((item) => {
        return item.bio[0].indexOf(action.data.term.toLowerCase()) > -1;
    });
    return Object.assign({}, state, {
        search: result
    })
    case types.CLEAR_SEARCH:
    return Object.assign({}, state, {
        search: []
    });
    default:
        return state
    }
}

export default appReducer;
