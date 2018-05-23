import React from 'react'
import '../styles/contract.css'
import {connect} from 'react-redux'
import { Grid } from 'semantic-ui-react'

class Contract extends React.Component {


  handleClick = (event) => {
    // console.log(this.props.contract);
    this.props.setCurrentContract(this.props.contract)
  }

  render(){

    // console.log('line 18 in Contract.js', this.props.contract);

    return(
      <Grid.Column>
          <div className="ui max width centered raised link cards" >
            <div className="card" style={{height: '15 rem'}} id='card' onClick={this.handleClick}>
              <h3>{this.props.contract.title.slice(0, 30)}</h3>
              <h4 id='card-caption'>Summary</h4> {this.props.contract.summary.slice(0, 200)}
              <h4 id='card-caption'>Compensation</h4> ${this.props.contract.compensation}<br />
            </div>
          </div>
      </Grid.Column>
    )
  }
}

function mapStateToProps(state){
  return {
    title: state.title,
    summary: state.summary,
    details: state.details,
    milestones: state.milestones,
    legal: state.legal,
    copyright: state.copyright,
    compensation: state.compensation,
  }
}

export default connect(mapStateToProps)(Contract)
