// const URL = 'http://localhost:3000/api/v1'
const URL = 'https://freelancer-backend.herokuapp.com/api/v1'
const headers = { "Content-Type": "application/json"}

export function login(username, password){
	return (dispatch) => {
		return fetch(URL + "/login", {
			method: "POST",
			headers: headers,
			body: JSON.stringify({username, password})
		})
		.then(res => res.json())
		.then(userData => {
			console.log("LOGGING IN", userData)
			if(userData.jwt){
				localStorage.setItem("token", userData.jwt)
				dispatch({
					type: "LOGIN_USER",
					payload: userData
				})
			}
		})
	}
}

export function logout(){
  // console.log('removed token:', localStorage.jwt);
	localStorage.removeItem("token")
	return {
		type: "LOGOUT"
	}
}

export function getUser(){
  const token = localStorage.getItem("token")
  return (dispatch) => {
    return fetch(URL + "/get_user", {
      headers: {
        "Authorization": token
      }
    })
    .then(res => res.json())
    .then(userData => {
			// console.log(userData);
      dispatch({
        type: "LOGIN_USER",
        payload: userData
      })
    })
  }
}

export function signup(username, first_name, last_name, password){
	return (dispatch) => {
		return fetch(URL + "/signup", {
			method: "POST",
			headers: headers,
			body: JSON.stringify({username, first_name, last_name, password})
		})
		.then(res => res.json())
		.then(userData => {
			console.log("LOGGING IN", userData)
			localStorage.setItem("token", userData.jwt)
			dispatch({
				type: "LOGIN_USER",
				payload: userData
			})
		})
	}
}


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

// export function signContract(newContract) {
//   return (dispatch) => {
//     return fetch(URL + "/contracts", {
//       headers: headers,
//       method: "POST",
//       body: JSON.stringify({
//         title: newContract.title,
//       })
//     })
//     .then(res => res.json())
//     .then(console.log)
//   }
// }

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
        compensation: newContract.compensation,
        developer_id: newContract.developer_id,
        contractor_id: newContract.contractor_id,
        developer_signature: newContract.developer_signature,
        contractor_signature: newContract.contractor_signature,
        approved: newContract.approved,
      })
    })
    .then(res => res.json())
    .then(console.log)
  }
}

export function changeContract(contract, id) {
  return (dispatch) => {
    return fetch(URL + `/contracts/${id}`, {
      headers: headers,
      method: "PATCH",
      body: JSON.stringify({
        title: contract.title,
        summary: contract.summary,
        details: contract.details,
        milestones: contract.milestones,
        legal: contract.legal,
        copyright: contract.copyright,
        compensation: contract.compensation,
        developer_id: contract.developer_id,
        contractor_id: contract.contractor_id,
				developer_signature: contract.developer_signature,
				contractor_signature: contract.contractor_signature,
				approved: contract.approved,
      })
    })
    .then(res => res.json())
    .then(console.log)
  }
}
