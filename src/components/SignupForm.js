import React from 'react'
import '../styles/welcome.css'
import { Form, Button, Icon, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { signup } from '../actions/actions'
import { NavLink } from 'react-router-dom'



class SignupForm extends React.Component{

	state = {
		first_name: "",
		last_name: "",
		username: "",
		password: "",
		passwordConfirmation: "",
		alert: "",
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		console.log(this.state)
		if (this.state.first_name === '' || this.state.last_name === '' || this.state.username === '' || this.state.password === '' || this.state.passwordConfirmation === ''){
			this.setState({alert: 'Please ensure all fields are completed.'})
		} else if(this.state.password === this.state.passwordConfirmation){
			this.props.signup(this.state.username, this.state.first_name, this.state.last_name, this.state.password)
			// .then(()=> localStorage.getItem("token") ? this.props.history.push("/home") : this.setState({alert: 'Please ensure username is unique and password fields match.'}) )
			.then(()=> localStorage.getItem("token") ? this.props.history.push("/home") : this.setState({alert: true}) )
		} else {
			this.setState({alert: 'Please ensure password fields match.'})
		}
	}

	render(){
		console.log(this.props)
		return (
			<div>
				<div className='welcome-container'>
					<div className='freelance-logo'>
						<h1 id="freelance-logo-title">Freestyle</h1>
					</div>
					<Form error id='welcome-form'>
				    <Form.Group widths='equal'>
							<Form.Input name="first_name" value={this.state.first_name} placeholder='First Name' onChange={this.handleChange}/>
							<Form.Input name="last_name" value={this.state.last_name} placeholder='Last Name' onChange={this.handleChange}/><br />
						</Form.Group>
							<Form.Input name="username" value={this.state.username} placeholder='Username' onChange={this.handleChange}/>
						<Form.Group  widths='equal'>
							<Form.Input type="password" name="password" value={this.state.password} placeholder='Password' onChange={this.handleChange}/>
							<Form.Input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder='Confirm Password' onChange={this.handleChange}/>
						</Form.Group>
							<Button fluid size='large' color='blue' icon labelPosition='right' onClick={this.handleSubmit}>
									Signup
								<Icon name='right arrow' />
							</Button>
						{/* <div className='alert'>
							{this.state.alert}
						</div> */}
						{this.state.alert ?
						<Message
							error
							// header='Invalid Signup'
							content='Please ensure username is unique and password fields match.'
						/>
						: ''}
						<div className='checkbox'>
							<Form.Checkbox label='I agree to the Terms and Conditions' defaultChecked />
						</div>
						<div>
							Already have an account? <NavLink to="/login">Log in</NavLink>
						</div>
					</Form>
				</div>
			</div>
		)
	}

}


export default connect(null, { signup })(SignupForm)
