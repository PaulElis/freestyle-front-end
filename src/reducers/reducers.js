const defaultState = {
  contracts: [],
  users: [],
  currentUser: null,
  username: "",
  password: "",
  alert: null,
  signup: false,
}

export default function(state=defaultState, action){
  switch(action.type){
    case "GET_CONTRACTS":
      return {...state, contracts: action.payload}
    case "GET_USERS":
      return {...state, users: action.payload}
    case "LOGIN_USER":
      return {...state, currentUser: action.payload.user}
    case "SET_USERNAME":
      return {...state, username: action.payload.username}
    case "SET_PASSWORD":
      return {...state, password: action.payload.password}
    case "LOGOUT":
      return defaultState
    default:
      return state
  }
}
