import React from 'react'
import { connect } from 'react-redux'
import {getUser} from '../actions/actions'
import { Image } from 'semantic-ui-react'
import '../styles/myProfile.css'

class MyProfile extends React.Component{

  componentDidMount(){
    this.props.getUser()
  }

  render(){
    console.log('line 17 props:', this.props.currentUser);

    const currentUsername = this.props.currentUser ? this.props.currentUser.username : 'nope'
    const currentFirstname = this.props.currentUser ? this.props.currentUser.first_name : 'nope'
    const currentLastname = this.props.currentUser ? this.props.currentUser.last_name : 'nope'

    return(
      <div className='myProfile-container'>
        <div className='myProfile-info'>
          <h2>MyProfile</h2>
          <Image src='https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg' size='medium' circular centered />
          <h3>Username: {currentUsername} </h3>
          <h3>Full Name: {currentFirstname} {currentLastname} </h3>
          {/* <h3>Developer Contracts:  {this.props.contractor_contracts}</h3> */}
          {/* <h3>Contractor Contracts:  </h3> */}
        </div>
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
