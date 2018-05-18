const URL = 'http://localhost:3000/api/v1'
const headers = { "Content-Type": "application/json"}

export function getContracts(){
  return (dispatch) => {
    return fetch(URL + "/contracts")
    .then(res => res.json())
    .then(contracts => {
      dispatch({type: "GET_CONTRACTS", payload: contracts})
    })
  }
}

export function getUsers(){
  return (dispatch) => {
    return fetch(URL + "/users")
    .then(res => res.json())
    .then(users => {
      dispatch({type: "GET_USERS", payload: users})
    })
  }
}

export function postContract(newContract) {
  return (dispatch) => {
    return fetch(URL + "/contracts", {
      headers: headers,
      method: "POST",
      body: JSON.stringify({
        title: newContract.title,
        summary: newContract.summary,
        details: newContract.details,
        milestones: newContract.milestones,
        legal: newContract.legal,
        copyright: newContract.copyright,
        compensation: newContract.compensation
      })
    })
    .then(res => res.json())
    .then(console.log)
  }
}
