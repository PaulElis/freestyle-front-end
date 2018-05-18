import React from 'react'
import '../styles/Home.css'

class Home extends React.Component{
  state={}

  render(){


    return(
      <div>
        <div>
          <img className="home-image" src='https://thelatestfreelanceblog.joomla.com/images/7.jpg' alt='oh no!'/>
        </div>
        <div className="home-about">
          About
        </div>
        <div className="home-review">
          Review
        </div>
      </div>
    )
  }
}

export default Home
