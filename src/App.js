import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import NavBar from './containers/NavBar'
import Home from './components/Home'
import NewContractForm from './components/NewContractForm'
import MyContracts from './components/MyContracts'
import MyProfile from './components/MyProfile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="app">
            <NavBar />
              <Route exact path="/Home" render={(routerProps) => {
                console.log();
                return <Home {...routerProps} beef="steak"/>
              }} />
              <Route exact path="/NewContractForm" component={NewContractForm} />
              <Route path="/MyContracts" component={MyContracts} />
              <Route exact path="/MyProfile" component={MyProfile} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
