const defaultState = {
  contracts: [],
  users: [],
}

export default function(state=defaultState, action){
  switch(action.type){
    case "GET_CONTRACTS":
      return {...state, contracts: action.payload}
    case "GET_USERS":
      return {...state, users: action.payload}
    default:
      return state
  }
}
