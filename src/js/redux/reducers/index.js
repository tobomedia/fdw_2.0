const INITIAL_STATE = {
    clients: []
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_CLIENTS':
      return Object.assign({}, state, {
          client:action.data
      });
    default:
    return state
    }
}

export default appReducer;
