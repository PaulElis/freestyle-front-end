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
      <Menu secondary>
        <Menu.Menu position='left' >
          <Menu.Item name='Home' active={activeItem === 'messages'} onClick={() => {
            this.props.history.push('/home')}} >
              <p id="navbar-freelance-logo-title">Freestyle</p>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
          {/* <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item> */}
          <Menu.Item id="navBar-item" name='My Contracts' active={activeItem === 'messages'} onClick={() => {
            this.props.history.push('/contracts')}} >
            <Icon name='folder' size='big' />
          </Menu.Item>
          <Menu.Item id="navBar-item" name='Create a Contract' active={activeItem === 'messages'} onClick={() => {
            this.props.history.push('/contracts/new')}} >
            <Icon name='compose' size='big' />
          </Menu.Item>
          <Menu.Item id="navBar-item" name='Profile' active={activeItem === 'messages'} onClick={() => {
            this.props.history.push('/profile')}} >
            <Icon name='user' size='big' />
          </Menu.Item>
          <Menu.Item id="navBar-item" name='Logout' active={activeItem === 'messages'} onClick={() => {
            this.props.logout()
            this.props.history.push('/login')}} >
              <Icon name='external square' size='big' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
  };
}

export default withRouter(connect(null, {logout})(NavBar));
