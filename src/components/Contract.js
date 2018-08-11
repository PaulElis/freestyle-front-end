import React from 'react'
import '../styles/contract.css'
import {connect} from 'react-redux'
import { Grid, Card } from 'semantic-ui-react'
// import { Route, NavLink } from 'react-router-dom'


class Contract extends React.Component {


  handleClick = (event) => {
    // console.log(this.props.contract);
    this.props.history.push(`/contracts/${this.props.contract.id}/edit`)
  }

  render(){

    // console.log('line 18 in Contract.js', this.props.contract);

    return(
        <Grid.Column>
            {/* <div className="ui max width centered raised link cards" >
              <div className="card" color='red' style={{height: '15 rem'}} id='card' onClick={this.handleClick}>
                <h3>{this.props.contract.title.slice(0, 30)}</h3>
                <h4 id='card-caption'>Summary</h4> {this.props.contract.summary.slice(0, 200)}
                <h4 id='card-caption'>Compensation</h4> ${this.props.contract.compensation}<br />
              </div>
            </div> */}
            <Card centered color='blue' onClick={this.handleClick}>
              <Card.Content id='contracts-content'>
                <Card.Header id='contracts-header'>
                  {this.props.contract.title.slice(0, 30)}
                </Card.Header>
                <br />
                <br />
                <Card.Meta id='contracts-meta'>
                  {this.props.contract.summary.slice(0, 200)}
                </Card.Meta>
                <br />
                <br />
                {/* <Card.Description id='contracts-description'>
                  Compensation <br />
                  ${this.props.contract.compensation}
                </Card.Description> */}
              </Card.Content>
              <Card.Content extra>
                <span className="left floated">
                  Compensation
                </span>
                <span className="right floated">
                  {/* Compensation <br /> */}
                  ${this.props.contract.compensation}
                </span>
              </Card.Content>
            </Card>
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
