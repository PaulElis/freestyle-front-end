import React from 'react';
import '../styles/navBar.css';
import { connect } from 'react-redux'
import { Menu, Icon } from 'semantic-ui-react'
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
      {/* <Menu size='large'> */}
      <Menu secondary>
          <Menu.Item className="navBar-item" name='Home' active={activeItem === 'messages'} onClick={() => {
            this.props.history.push('/home')
          }} >
            <Icon name='home' size='large' />
          </Menu.Item>

        <Menu.Menu position='center'>
           <p id="navbar-freelance-logo-title">Freelancr</p>
        </Menu.Menu>
        <Menu.Menu position='right'>
          {/* <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item> */}
          <Menu.Item className="navBar-item" name='My Contracts' active={activeItem === 'messages'} onClick={() => {
            this.props.history.push('/contracts')}} >
            <Icon name='folder' size='large' />
          </Menu.Item>
          <Menu.Item className="navBar-item" name='Create a Contract' active={activeItem === 'messages'} onClick={() => {
            this.props.history.push('/contracts/new')}} >
            <Icon name='compose' size='large' />
          </Menu.Item>
          <Menu.Item className="navBar-item" name='Profile' active={activeItem === 'messages'} onClick={() => {
            this.props.history.push('/profile')}} >
            <Icon name='user' size='large' />
          </Menu.Item>
          <Menu.Item className="navBar-item" name='Logout' active={activeItem === 'messages'} onClick={() => {
            this.props.logout()
            this.props.history.push('/login')}} >
              <Icon name='external square' size='large' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {/* </Menu> */}
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
