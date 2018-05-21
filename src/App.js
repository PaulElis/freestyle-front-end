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
import {getUser, logout} from './actions/actions'
import Login from './components/Login'
import {Route, withRouter} from 'react-router-dom'


class App extends Component {

  componentDidMount(){
    // console.log('in line 22', localStorage.getItem("token"));
		if (localStorage.getItem("token")){
			this.props.getUser()
			.then(() => {
				this.props.history.push('/home')
			})
		}
	}

  render() {
    return (
      <div className="App">
        {/* <Router> */}
          <div className="app">
            {localStorage.getItem("token") ? <NavBar /> : null}
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignupForm}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/contracts" component={MyContracts}/>
                <Route exact path="/contracts/new" component={NewContractForm}/>
                <Route exact path="/profile" component={MyProfile}/>
            {/* <Route path="/login" component={Login} />
              <Route exact path="/Home" render={(routerProps) => {
                console.log();
                return <Home {...routerProps} beef="steak"/>
              }} />
              <Route exact path="/NewContractForm" component={NewContractForm} />
              <Route path="/MyContracts" component={MyContracts} />
              <Route exact path="/MyProfile" component={MyProfile} /> */}
          </div>
        {/* </Router> */}
      </div>
    );
  }
}

export default withRouter(connect(null, {getUser, logout})(App))
