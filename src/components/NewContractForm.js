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
    developer_id: this.props.contract ? this.props.contract.developer_id : '',
    contractor_id: this.props.contract ? this.props.contract.contractor_id : '',
    success: false,
    dev_match: false,
    title_check: '',
    summary_check: '',
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
      if(this.state.developer_id === this.state.contractor_id){
        this.setState({
          dev_match: true,
        })
      } else if (this.state.title === '') {
        console.log('line 49');
        this.setState({
          title_check: true
        })
      } else if (this.state.summary === '') {
        this.setState({
          summary_check: true
        })
      } else if (this.state.developer_id !== '' && this.state.developer_id !== '') {
        this.props.postContract(contract)
        this.setState({
          success: true,
          dev_match: false,
          title_check: true,
        })
      }
    } else {
      this.props.changeContract(contract, contract.id)
      this.setState({
        success: true
      })
    }
  }

  render(){

    // console.log(this.props);

    const developersSemantic = this.props.users.map((user, index) => {
      return {key: index, value: user.id, text: `${user.first_name} ${user.last_name}`, user: user, id: user.id}
    })

    const contractorsSemantic = this.props.users.map((user, index) => {
      return {key: index, value: user.id, text: `${user.first_name} ${user.last_name}`, user: user, id: user.id}
    })

    return(
      <div>
        <div className='new-contract-form-container'>
        <div className='new-contract-form'>
            <Form widths='equal' onSubmit = {(event) => {
              event.preventDefault()
              // console.log('line 73', this.state);
              this.handleSubmit(this.state)
              }
            }>
              <p id='new-contract-label'>Title</p>
                <Form.Input name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
                <div id='form-alert'>
                  {this.state.title_check ? 'Title must exist.'
                  : null}
                </div>
              <p id='new-contract-label'>Summary</p>
                <Form.Input name="summary" placeholder="Summary" value={this.state.summary} onChange={this.handleChange} />
                <div id='form-alert'>
                  {this.state.summary_check ? 'Summary must exist.'
                  : null}
                </div>
              <p id='new-contract-label'>Details</p>
                <Form.Input name="details" placeholder="Details" value={this.state.details} onChange={this.handleChange} />
              <p id='new-contract-label'>Milestones</p>
                <Form.Input name="milestones" placeholder="Milestones" value={this.state.milestones} onChange={this.handleChange} />
              <p id='new-contract-label'>Legal</p>
                <Form.Input name="legal" placeholder="Legal" value={this.state.legal} onChange={this.handleChange} />
              <p id='new-contract-label'>Copyright</p>
                <Form.Input name="copyright" placeholder="Copyright" value={this.state.copyright} onChange={this.handleChange} />
              <p id='new-contract-label'>Compensation</p>
                <Form.Input name="compensation" placeholder="$" value={`${this.state.compensation}`} onChange={this.handleChange} />
              <p id='new-contract-label'>Developer</p>
                <Dropdown placeholder='Developer' name='developer_id' value={this.state.developer_id} fluid selection options={developersSemantic} onChange={this.handleDropdown} />
              <div id='form-alert'>
                {this.state.dev_match ? 'Developer and Contractor cannot be the same.'
                : null}
              </div>
              <p id='new-contract-label'>Contractor</p>
                <Dropdown placeholder='Contractor' name='contractor_id' value={this.state.contractor_id} fluid selection options={contractorsSemantic} onChange={this.handleDropdown} />
                <div id='success-alert'>
                  {this.state.success ? 'SUCCESS!'
                  : null}
                </div>
              <Button type="submit">Done</Button>
            </Form>
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
          <h4>Compensation</h4> {`${this.state.compensation}`}<br />
            <br />
          <h4>Developer: {`${this.state.developer_id}`} Contractor: {`${this.state.contractor_id}`}<br /></h4>
            <br />
        </div>
        {/* <div id='success-alert'>
          {this.state.success ? ''
          : null}
          /* SUCCESS
        </div> */}

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
