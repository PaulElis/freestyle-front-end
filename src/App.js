import React, { Component } from 'react';
// import {Button} from 'semantic-ui-react'

// import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux'

import NavBar from './containers/NavBar'
import Home from './components/Home'
import SignupForm from './components/SignupForm'
import NewContractForm from './components/NewContractForm'
import MyContracts from './components/MyContracts'
import MyProfile from './components/MyProfile'
import {getUser, logout, getContracts, getUsers} from './actions/actions'
import Login from './components/Login'
import {Route, withRouter} from 'react-router-dom'


class App extends Component {

  componentDidMount(){
    // console.log('in line 22', localStorage.getItem("token"));
    this.props.getUsers()

		if (localStorage.getItem("token")){
			this.props.getUser()
      .then(()=> {

        this.props.getContracts()
        .then(() => {
          this.props.history.push(this.props.location.pathname)
        })
      })

		} else {
      this.props.history.push('/login')
    }
	}

  render() {
    return (
      <div className="App">
          <div className="app">
            {localStorage.getItem("token") ? <NavBar /> : null}
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignupForm}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/contracts" component={MyContracts}/>
                <Route exact path="/contracts/new" component={NewContractForm}/>
                <Route exact path="/contracts/:id/edit" render={(routerProps) => {
                  const contractId = routerProps.match.params.id
                  const contract = this.props.myContracts.find((contract) => contract.id === parseInt(contractId,10))
                  // console.log(contract);
                  return <NewContractForm {...routerProps} contract={contract}/>
                }}/>
                <Route exact path="/profile" component={MyProfile}/>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    myContracts: state.contracts
  }
}

export default withRouter(connect(mapStateToProps, {getUser, logout, getUsers, getContracts})(App))
