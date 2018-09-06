import React from 'react'
import { connect } from 'react-redux'
import {getUser} from '../actions/actions'
import { Image, Card } from 'semantic-ui-react'
import profile from '../images/profile.jpg'
import '../styles/myProfile.css'

class MyProfile extends React.Component{

  componentDidMount(){
    this.props.getUser()
  }

  render(){
    // console.log('line 14 props:', this.props.currentUser);
    const currentUsername = this.props.currentUser ? this.props.currentUser.username : ''
    const currentFirstname = this.props.currentUser ? this.props.currentUser.first_name : ''
    const currentLastname = this.props.currentUser ? this.props.currentUser.last_name : ''

    return(
      <div className='myProfile-container'>
          <Card centered color='blue' onClick={this.handleClick}>
            <Image id='profile-image' circular centered size='small' src={profile} />
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
