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
          <h1>Discover the Freelancr difference!</h1>
          Empowering projects by providing a solid foundation Freelancr helps ideas get off the ground running. With Freelancr experience a seamless transition from concept to completion with mutual outlined expectations.
        </div>
        <div className="home-review">
          <h1>Our Members Tell It Like It Is</h1>
          “My favorite thing about Freelancr is the easy use of its platform and network of peers who I can work with!” - William C. Beck <br />
           <br />
          “I've been able to rest easier knowing that Freelancr is available to get my projects going” - Victoria Nelson <br />
        </div>
      </div>
    )
  }
}

export default Home
