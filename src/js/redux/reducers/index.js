import * as types from '../constants';

const INITIAL_STATE = {
    actors:[],
    actresses:[],
    creatives:[],
    news: []
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
            news: action.data
        });
    default:
        return state
    }
}

export default appReducer;
