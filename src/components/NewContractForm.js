import React from 'react'
import '../styles/newContractForm.css'
import { Button, Form, Dropdown, Icon } from 'semantic-ui-react'
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
    developer_signature: this.props.contract ? this.props.contract.developer_signature : false,
    contractor_signature: this.props.contract ? this.props.contract.contractor_signature : false,
    approved: this.props.contract ? this.props.contract.approved : false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      id: nextProps.contract ? nextProps.contract.id : '',
      title: nextProps.contract ? nextProps.contract.title : '',
      summary: nextProps.contract ? nextProps.contract.summary : '',
      details: nextProps.contract ? nextProps.contract.details : '',
      milestones: nextProps.contract ? nextProps.contract.milestones : '',
      legal: nextProps.contract ? nextProps.contract.legal : '',
      copyright: nextProps.contract ? nextProps.contract.copyright : '',
      compensation: nextProps.contract ? nextProps.contract.compensation : '',
      developer_id: nextProps.contract ? nextProps.contract.developer_id : '',
      contractor_id: nextProps.contract ? nextProps.contract.contractor_id : '',
      success: false,
      dev_match: false,
      title_check: '',
      summary_check: '',
      developer_signature: nextProps.contract ? nextProps.contract.developer_signature : false,
      contractor_signature: nextProps.contract ? nextProps.contract.contractor_signature : false,
      approved: nextProps.contract ? nextProps.contract.approved : false,
    }
  }

  componentDidMount(){
    this.props.getUsers()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      developer_signature: false,
      contractor_signature: false,
    })
  }

  handleDropdown = (event, result) => {
    this.setState({
      [result.name]: result.value,
      developer_signature: false,
      contractor_signature: false,
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
      } else {
        this.props.changeContract(contract, contract.id)
        this.setState({
          success: true
        })
      }
    }
  }

  handleDeveloperToggle = () => {
    this.setState({
      // leftActive: !this.state.leftActive,
      developer_signature: !this.state.developer_signature,
    }, () => {
      this.handleSubmit(this.state)
      console.log('in handleSubmit area');
      // put conditional here if dev_sign and con_sign
      if (this.state.developer_signature === true && this.state.contractor_signature === true) {
        this.setState({
          approved: true
        }, () => {
          this.handleSubmit(this.state)
        })
      }
    })
  }

  handleContractorToggle = () => {
    this.setState({
    // contractor_signature: !this.state.contractor_signature,
      contractor_signature: !this.state.contractor_signature,
    }, () => {
      this.handleSubmit(this.state)
      if (this.state.developer_signature === true && this.state.contractor_signature === true) {
        this.setState({
          approved: true
        }, () => {
          this.handleSubmit(this.state)
        })
      }
    })
  }

  render(){

    // console.log('props', this.props);
    // console.log(this.developerName());

    const { developer_signature } = this.state
    const { contractor_signature } = this.state

    const developersSemantic = this.props.users.map((user, index) => {
      return {key: index, value: user.id, text: `${user.first_name} ${user.last_name}`, user: user, id: user.id}
    })

    const contractorsSemantic = this.props.users.map((user, index) => {
      return {key: index, value: user.id, text: `${user.first_name} ${user.last_name}`, user: user, id: user.id}
    })

    return(
        <div className='new-contract-form-container'>
          <div className='new-contract-form'>
              <Form widths='equal' onSubmit = {(event) => {
                event.preventDefault()
                this.handleSubmit(this.state)
                }
              }>
                <p id='new-contract-label'>Title</p>
                  <Form.TextArea name="title" placeholder="" disabled={this.state.approved} value={this.state.title} onChange={this.handleChange} />
                  <div id='form-alert'>
                    {this.state.title_check ? 'Title must exist.'
                    : null}
                  </div>
                <p id='new-contract-label'>Summary</p>
                  <Form.TextArea name="summary" placeholder="" disabled={this.state.approved} value={this.state.summary} onChange={this.handleChange} />
                  <div id='form-alert'>
                    {this.state.summary_check ? 'Summary must exist.'
                    : null}
                  </div>
                <p id='new-contract-label'>Details</p>
                  <Form.TextArea name="details" placeholder="" disabled={this.state.approved} value={this.state.details} onChange={this.handleChange} />
                <p id='new-contract-label'>Milestones</p>
                  <Form.TextArea name="milestones" placeholder="" disabled={this.state.approved} value={this.state.milestones} onChange={this.handleChange} />
                <p id='new-contract-label'>Legal</p>
                  <Form.TextArea name="legal" placeholder="" disabled={this.state.approved} value={this.state.legal} onChange={this.handleChange} />
                <p id='new-contract-label'>Copyright</p>
                  <Form.TextArea name="copyright" placeholder="" disabled={this.state.approved} value={this.state.copyright} onChange={this.handleChange} />
                <p id='new-contract-label'>Compensation</p>
                  <Form.Input icon='dollar' iconPosition='left' name="compensation" disabled={this.state.approved} value={`${this.state.compensation}`} onChange={this.handleChange} />
                <p id='new-contract-label'>Developer</p>
                  <Dropdown placeholder='' name='developer_id' disabled={this.state.approved} value={this.state.developer_id} fluid selection options={developersSemantic} onChange={this.handleDropdown} />
                <div id='form-alert'>
                  {this.state.dev_match ? 'Developer and Contractor cannot be the same.'
                  : null}
                </div>
                <p id='new-contract-label'>Client</p>
                  <Dropdown placeholder='' name='contractor_id'  disabled={this.state.approved} value={this.state.contractor_id} fluid selection options={contractorsSemantic} onChange={this.handleDropdown} />
                  <div id='success-alert'>
                    {this.state.success ? 'SUCCESS!'
                    : null}
                  </div>
                <br />
                <Button color='black' compact fluid type="submit" size='large' disabled={this.state.approved} >Submit</Button>
              </Form>
          </div>

        <div className='contract'>
          <p id='contract-label'>Title</p> {this.state.title}<br />
            <br />
          <p id='contract-label'>Summary</p> {this.state.summary}<br />
            <br />
          <p id='contract-label'>Details</p> {this.state.details}<br />
            <br />
          <p id='contract-label'>Milestones</p> {this.state.milestones}<br />
            <br />
          <p id='contract-label'>Legal</p> {this.state.legal}<br />
            <br />
          <p id='contract-label'>Copyright</p> {this.state.copyright}<br />
            <br />
          <p id='contract-label'>Compensation</p> {`${this.state.compensation}`}<br />
            <br />
            <br />
          <div>
            {this.props.contract && this.props.contract.developer_id === this.props.currentUser.id ?
              <Button animated='fade' id='left-button' labelPosition='left' size='large' disabled={this.state.approved} icon floated='left' toggle active={developer_signature} onClick={this.handleDeveloperToggle}>
                <Button.Content visible>
                  {this.props.contract && this.props.contract.developer_id ? `${this.props.contract.developer.first_name} ${this.props.contract.developer.last_name}` : null}
                </Button.Content>
                  <Button.Content hidden>
                    Click to sign.
                  </Button.Content>
              </Button>
               :
              <Button id='left-button' labelPosition='left' size='large' disabled={this.state.approved} icon floated='left' toggle active={developer_signature} >
                <Icon name='check' />
                  {this.props.contract && this.props.contract.developer_id ? `${this.props.contract.developer.first_name} ${this.props.contract.developer.last_name}` : null}
              </Button>}
            {this.props.contract && this.props.contract.contractor_id === this.props.currentUser.id ?
              <Button animated='fade' id='right-button' labelPosition='left' size='large' disabled={this.state.approved} icon floated='right' toggle active={contractor_signature} onClick={this.handleContractorToggle}>
                <Button.Content visible>
                  {this.props.contract && this.props.contract.contractor_id ? `${this.props.contract.contractor.first_name} ${this.props.contract.contractor.last_name}` : null}
                </Button.Content>
                  <Button.Content hidden>
                    Click to sign.
                  </Button.Content>
              </Button>
              :
              <Button id='right-button' labelPosition='right' size='large' disabled={this.state.approved} icon floated='right' toggle active={contractor_signature} >
                <Icon name='check' />
                  {this.props.contract && this.props.contract.contractor_id ? `${this.props.contract.contractor.first_name} ${this.props.contract.contractor.last_name}` : null}
              </Button>}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log('line 254: state', state)
  return {
    users: state.users,
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, {postContract, changeContract, getUsers})(NewContractForm)
