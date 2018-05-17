import React from 'react'
import {connect} from 'react-redux'

class NewContractForm extends React.Component{
  state={
    title: ``,
    summary: ``,
    details: ``,
    milestones: ``,
    legal: ``,
    copyright: ``,
    compensation: ``,
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){

    // console.log(this.props);

    return(
      <div>
        <div className='new-contract-form'>
          <form onSubmit = {(event) => {
            event.preventDefault()
            this.props.handleSubmit(this.state)
            }
          }>
            <input name="title" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange}></input>
            <input name="summary" placeholder="Enter Summary" value={this.state.summary} onChange={this.handleChange}></input>
            <input name="details" placeholder="Enter Details" value={this.state.details} onChange={this.handleChange}></input>
            <input name="milestones" placeholder="Enter Milestones" value={this.state.milestones} onChange={this.handleChange}></input>
            <input name="legal" placeholder="Enter Legal" value={this.state.legal} onChange={this.handleChange}></input>
            <input name="copyright" placeholder="Enter Copyright" value={this.state.copyright} onChange={this.handleChange}></input>
            <input name="compensation" placeholder="Enter Compensation" value={this.state.compensation} onChange={this.handleChange}></input>
            <input type='submit' value='Done'/>
          </form>
        </div>
        <div className='contract'>
          <br />
          <h2>Contract</h2>
          <br />
          <h4>Title</h4> {this.state.title}<br />
          <br />
          <h4>Summary</h4> {this.state.summary}<br />
          <br />
          <h4>Details</h4> {this.state.details}<br />
          <br />
          <h4>Milestones</h4> {this.state.milestones}<br />
          <br />
          <h4>Legal</h4> {this.state.legal}<br />
          <br />
          <h4>Copyright</h4> {this.state.copyright}<br />
          <br />
          <h4>Compensation</h4> {this.state.compensation}<br />
          <br />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (newContract) => {
      console.log(newContract);
      // dispatch({type: "NEW_CONTRACT", payload: newContract})
    }
  }
}

// function postFetch(beef) {
//   fetch(URL, {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: "POST",
//     body: JSON.stringify({state: beef})
//   })
// }

function mapStateToProps(state){
  return{
    title: state.title,
    summary: state.summary,
    details: state.details,
    milestones: state.milestones,
    legal: state.legal,
    copyright: state.copyright,
    compensation: state.compensation,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewContractForm)
