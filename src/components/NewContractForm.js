import React from 'react'
import '../styles/newContractForm.css'
import { Button, Form, Dropdown } from 'semantic-ui-react'
// import { developersDropdown } from '../dropdown/dropdown.js'
import {connect} from 'react-redux'
import {getUsers, postContract, changeContract} from '../actions/actions'

class NewContractForm extends React.Component{
  state = {
    id: this.props.contract ? this.props.contract.id : '',
    title: this.props.contract ? this.props.contract.title : '',
    summary: this.props.contract ? this.props.contract.summary : '',
    details: this.props.contract ? this.props.contract.details : '',
    milestones: this.props.contract ? this.props.contract.milestones : '',
    legal: this.props.contract ? this.props.contract.legal : '',
    copyright: this.props.contract ? this.props.contract.copyright : '',
    compensation: this.props.contract ? this.props.contract.compensation : '',
    developer_id: 1,
    contractor_id: 1,
  }

  componentDidMount(){
    this.props.getUsers()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDropdown = (event, result) => {
    this.setState({
      [result.name]: result.value
    })
  }

  handleSubmit = (contract) => {
    // console.log('contract', result);
    if(!this.props.contract){
      this.props.postContract(contract)
    } else {
      console.log('in changeContract conditional', contract);
      this.props.changeContract(contract, contract.id)
    }
  }

  render(){

    // console.log(this.state);
    // console.log('developer: ', this.state.developer_id);
    // console.log('contractor: ', this.state.contractor_id);

    // const developers = this.props.users.map((user, index) => {
    //   return  <option name="developer_id" key={index} value={user.id} user={user} id={index}>{user.first_name} {user.last_name}</option>
    // })

    const developersSemantic = this.props.users.map((user, index) => {
      return {key: index, value: user.id, text: `${user.first_name} ${user.last_name}`, user: user, id: user.id}
    })

    const contractorsSemantic = this.props.users.map((user, index) => {
      return {key: index, value: user.id, text: `${user.first_name} ${user.last_name}`, user: user, id: user.id}
    })

    return(
      <div className='new-contract-form-container'>
        <div className='new-contract-form'>
          {/* onSubmit={this.handleSubmit} */}
            <Form widths='equal' onSubmit = {(event) => {
              event.preventDefault()
              console.log('line 73', this.state);
              this.handleSubmit(this.state)
              }
            }>
              <Form.Input name="title" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange} />
              <Form.Input name="summary" placeholder="Enter Summary" value={this.state.summary} onChange={this.handleChange} />
              <Form.Input name="details" placeholder="Enter Details" value={this.state.details} onChange={this.handleChange} />
              <Form.Input name="milestones" placeholder="Enter Milestones" value={this.state.milestones} onChange={this.handleChange} />
              <Form.Input name="legal" placeholder="Enter Legal" value={this.state.legal} onChange={this.handleChange} />
              <Form.Input name="copyright" placeholder="Enter Copyright" value={this.state.copyright} onChange={this.handleChange} />
              <Form.Input name="compensation" placeholder="Enter Compensation" value={this.state.compensation} onChange={this.handleChange} />
                <Dropdown placeholder='Developer' name='developer_id' fluid selection options={developersSemantic} onChange={this.handleDropdown} />
                <Dropdown placeholder='Contractor' name='contractor_id' fluid selection options={contractorsSemantic} onChange={this.handleDropdown} />
                <Button type="submit">Create</Button>
            </Form>
        </div>

        {/* <div>
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
        </div> */}

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

export default connect(mapStateToProps, {getUsers, postContract, changeContract})(NewContractForm)
