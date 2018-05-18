import React from 'react'
import {connect} from 'react-redux'
import { Grid } from 'semantic-ui-react'

// import NewContractForm from './NewContractForm'


class Contract extends React.Component {

  state = {}

  // contractChange = () => {
  //     fetch("http://localhost:3000/api/v1/reviews",
  //     {
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       method: "POST",
  //       body: JSON.stringify({user_id: user_id, text: text, business_id: business_id})
  //     })
  //     .then(r => r.json())
  //     .then(newReview => this.setState({
  //       reviews: [...this.state.reviews, newReview]
  //     })
  //   )
  // }

  handleClick = () => {
    console.log('inHandleclick');
  }

  render(){

    // console.log(this.props.contract);

    return(
      // <NewContractForm contractChange={this.contractChange}/>
      <Grid.Column>
          <div className="ui max width centered raised link cards">
          <div className="card" style={{height: '15 rem'}} onClick={this.handleClick}>
            {this.props.contract.title}<br />
            <h4>Summary</h4> {this.props.contract.summary}<br />
            <h4>Compensation</h4> {this.props.contract.compensation}<br />
            <br />
          </div>
          </div>
      </Grid.Column>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (beef) => {
      console.log(beef);
      // dispatch({type: "CHANGE_CONTRACT", payload: beef})
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Contract)
