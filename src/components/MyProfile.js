import React from 'react'
import { connect } from 'react-redux'
import {getUser} from '../actions/actions'
import { Image, Icon, Card } from 'semantic-ui-react'
import '../styles/myProfile.css'

class MyProfile extends React.Component{

  // state={
  //   modal: true
  // }

  componentDidMount(){
    this.props.getUser()
  }

  // exitModal = () => {
  //   this.setState({
  //     modal: false
  //   })
  // }

  render(){
    // console.log('line 14 props:', this.props.currentUser);

    const currentUsername = this.props.currentUser ? this.props.currentUser.username : ''
    const currentFirstname = this.props.currentUser ? this.props.currentUser.first_name : ''
    const currentLastname = this.props.currentUser ? this.props.currentUser.last_name : ''

    return(
      <div className='myProfile-container'>
        {/* <Modal className='myProfile-info'>
          <Modal.Header><h2>MyProfile</h2></Modal.Header>
          <Modal.Content image>
            <Image id='profile-image' circular centered size='medium' src='https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg' />
            <Modal.Description>
              <Header>Username: {currentUsername} </Header>
              <p>Full Name: {currentFirstname} {currentLastname} </p>
            </Modal.Description>
          </Modal.Content>
        </Modal> */}
          {/* <div className='myProfile-info'>
              <Icon name='user outline' size='huge' />
            <p id='myProfile-text'>Username: {currentUsername} <br />
            Full Name: {currentFirstname} {currentLastname} </p>
          </div> */}
          <Card centered color='blue' onClick={this.handleClick}>
            {/* <Icon center id='profile-icon' name='user outline' size='massive' /> */}
            <Image id='profile-image' circular centered size='small' src='https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg' />
            <Card.Header id='profile-header'>
              <span className="left floated">
                Username
              </span>
              <span className="right floated">
                {currentUsername}
              </span>
            </Card.Header>
            <Card.Content extra id='profile-extra-content'>
              <span className="left floated">
                Full Name
              </span>
              <span className="right floated">
                {currentFirstname} {currentLastname}
              </span>
            </Card.Content>
          </Card>
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log('line 22: state', state.currentUser)
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, {getUser})(MyProfile)
