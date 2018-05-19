import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'

// import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux'

import NavBar from './containers/NavBar'
import Home from './components/Home'
import Signup from './components/Signup'
import NewContractForm from './components/NewContractForm'
import MyContracts from './components/MyContracts'
import MyProfile from './components/MyProfile'
import {getUser, logout} from './actions/actions'
import Login from './components/Login'
import {Route, withRouter} from 'react-router-dom'


class App extends Component {

  componentDidMount(){
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
            <NavBar />
              <Button onClick={() => {
                  this.props.logout()
                  this.props.history.push('/login')
                }}>Logout</Button>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup}/>
                <Route path="/home" component={Home}/>
                <Route path="/MyContracts" component={MyContracts}/>
                <Route path="/NewContractForm" component={NewContractForm}/>
                <Route path="/MyProfile" component={MyProfile}/>
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
