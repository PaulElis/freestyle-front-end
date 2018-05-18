import React from 'react'
import {connect} from 'react-redux'
import {getUsers, postContract} from '../actions/actions'

class NewContractForm extends React.Component{
  state = {
    title: ``,
    summary: ``,
    details: ``,
    milestones: ``,
    legal: ``,
    copyright: ``,
    compensation: ``,
    developer_id: 1,
    contractor_id: 1,
  }

  componentDidMount(){
    this.props.getUsers()
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (newContract) => {
    this.props.postContract(newContract)
  }

  render(){

    console.log(this.state);
    // console.log('developer: ', this.state.developer_id);
    // console.log('contractor: ', this.state.contractor_id);

    const developers = this.props.users.map((user, index) => {
      return  <option key={index} value={user.id} user={user} id={index}>{user.first_name} {user.last_name}</option>
    })

    const contractors = this.props.users.map((user, index) => {
      return  <option key={index} value={user.id} user={user} id={index}>{user.first_name} {user.last_name}</option>
    })

    return(
      <div>
        <div className='new-contract-form'>
          <form onSubmit = {(event) => {
            event.preventDefault()
            this.handleSubmit(this.state)
            }
          }>
            <input name="title" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange}></input>
            <input name="summary" placeholder="Enter Summary" value={this.state.summary} onChange={this.handleChange}></input>
            <input name="details" placeholder="Enter Details" value={this.state.details} onChange={this.handleChange}></input>
            <input name="milestones" placeholder="Enter Milestones" value={this.state.milestones} onChange={this.handleChange}></input>
            <input name="legal" placeholder="Enter Legal" value={this.state.legal} onChange={this.handleChange}></input>
            <input name="copyright" placeholder="Enter Copyright" value={this.state.copyright} onChange={this.handleChange}></input>
            <input name="compensation" placeholder="Enter Compensation" value={this.state.compensation} onChange={this.handleChange}></input>
            <b>Developer: </b>
            <select onChange={this.handleChange} name="developer_id">
              {developers}
            </select>
            <b>Contractor: </b>
            <select onChange={this.handleChange} name="contractor_id">
              {contractors}
            </select>
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

function mapStateToProps(state){
  // console.log('line 74: state', state)
  return {users: state.users}
}

export default connect(mapStateToProps, {getUsers, postContract})(NewContractForm)
