import React from 'react'
import {connect} from 'react-redux'
import '../styles/home.css'

class Home extends React.Component{
  state={}

  render(){

    // console.log(this.props);

    return(
      <div className="home-container">

        <div className='home-about-container'>
          <img className="home-image" src='http://workplaceinsight.net/wp-content/uploads/2017/11/Flexible-working-offer.jpg' alt='oh no!'/>
          <div className="home-about">
            <div id='home-about-title'>Where Freelance Happens</div>
            <p id='home-about-text'>Freestyle empowers projects by providing a solid foundation to help ideas get off the ground running.
            Experience a seamless transition from concept to completion with mutually outlined expectations.
            </p>
          </div>
        </div>

          <div className="home-review-container">
            <div id='home-review-title'>The hub for your team and your work</div>
            <p id='home-review-text'>
              Freestyle is a place where you come together to collaborate, important information can be found by the right people, and your tools pipe in information when and where you need it.
            {/* “My favorite thing about Freestyle is the easy use of its platform and network of peers who I can work with!” - William C. Beck <br /> */}
             {/* <br /> */}
            {/* “I've been able to rest easier knowing that Freestyle is available to get my projects going” - Victoria Nelson <br /> */}
            </p>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(Home)
