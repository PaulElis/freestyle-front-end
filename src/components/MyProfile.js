import React from 'react'
import { connect } from 'react-redux'
import '../styles/myProfile.css'

class MyProfile extends React.Component{
  // state= {
  //   currentUser: '',
  // }

  render(){
    console.log('line 10 props:', this.props.currentUser);

    const currentUsername = this.props.currentUser ? this.props.currentUser.username : 'nope'
    const currentFirstname = this.props.currentUser ? this.props.currentUser.first_name : 'nope'
    const currentLastname = this.props.currentUser ? this.props.currentUser.last_name : 'nope'

    return(
      <div className='myProfile-container'>
        <h3>MyProfile</h3>
        {currentUsername} <br />
        {currentFirstname} {currentLastname} <br />
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log('line 22: state', state.currentUser)
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(MyProfile)
