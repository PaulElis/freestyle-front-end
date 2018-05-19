const defaultState = {
  contracts: [],
  users: [],
  currentUser: null,
}

export default function(state=defaultState, action){
  switch(action.type){
    case "GET_CONTRACTS":
      return {...state, contracts: action.payload}
    case "GET_USERS":
      return {...state, users: action.payload}
    case "LOGIN_USER":
      return {...state, currentUser: action.payload.user}
    case "LOGOUT":
      return defaultState
    default:
      return state
  }
}
