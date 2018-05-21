import React from 'react'
import '../styles/home.css'

class Home extends React.Component{
  state={}

  render(){


    return(
      <div className="home-container">
        <div>
          <img className="home-image" src='https://thelatestfreelanceblog.joomla.com/images/7.jpg' alt='oh no!'/>
        </div>
        <div className="home-about">
          <h2>Discover the Freelancr difference!</h2>
          Empowering projects by providing a solid foundation Freelancr helps ideas get off the ground running. With Freelancr experience a seamless transition from concept to completion with mutual outlined expectations.
        </div>
        <div className="home-review">
          “My favorite thing about Freelancr is the easy use of its platform and network of peers who I can work with!” - William C. Beck
        </div>
      </div>
    )
  }
}

export default Home
