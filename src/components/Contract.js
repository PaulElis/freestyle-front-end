import React from 'react'
import {connect} from 'react-redux'
import { Grid } from 'semantic-ui-react'

// import NewContractForm from './NewContractForm'

class Contract extends React.Component {


  handleClick = (event) => {
    // console.log(this.props.contract);
    this.props.setCurrentContract(this.props.contract)
  }

  render(){

    // console.log('line 18 in Contract.js', this.props.contract);

    return(
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


// function mapDispatchToProps(dispatch) {
//   return {
//     handleSubmit: (beef) => {
//       console.log(beef);
//       // dispatch({type: "CHANGE_CONTRACT", payload: beef})
//     }
//   }
// }

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
