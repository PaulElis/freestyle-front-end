import React from 'react';
import '../styles/navBar.css';
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
import {logout} from '../actions/actions'



class NavBar extends React.Component {

  state = { activeItem: '' }

  handleItemClick = (e, { name, active }) => {this.setState({ activeItem: name})
    // console.log(`e: ${e}`, `name: ${name}`, `active: ${active}`);
  }


  render(){

    // console.log(this.state);

    const { activeItem } = this.state

  return (
    <div className="navBar-container">
      <Menu secondary>
          <Menu.Item className="navBar-item" name='Home' active={activeItem === 'messages'} onClick={() => {
            this.props.history.push('/home')
          }} />
        {/* <Menu.Menu position='center'>
           Freelancr
        </Menu.Menu> */}
        <Menu.Menu position='right'>
          {/* <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item> */}
          <Menu.Item className="navBar-item" name='My Contracts' active={activeItem === 'messages'} onClick={() => {
            this.props.history.push('/contracts')
          }} />
          <Menu.Item className="navBar-item" name='Create a Contract' active={activeItem === 'messages'} onClick={() => {
            this.props.history.push('/contracts/new')
          }} />
          <Menu.Item className="navBar-item" name='Profile' active={activeItem === 'messages'} onClick={() => {
            this.props.history.push('/profile')
          }} />
          <Menu.Item className="navBar-item" name='Logout' active={activeItem === 'messages'} onClick={() => {
            this.props.logout()
            this.props.history.push('/login')
          }} />
        </Menu.Menu>
      </Menu>
      {/* <b><NavLink to="/Home">Home</NavLink></b>
      <b>Freelancr</b>
      <b><NavLink to="/MyContracts">MyContracts</NavLink></b>
      <b><NavLink to="/NewContractForm">NewContract</NavLink></b>
      <b><NavLink to="/MyProfile">MyProfile</NavLink></b> */}
    </div>
  );
  };
}

export default withRouter(connect(null, {logout})(NavBar));
