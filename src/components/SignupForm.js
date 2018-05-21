import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { signup } from '../actions/actions'

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
		if (this.state.password === this.state.passwordConfirmation){
			this.props.signup(this.state.username, this.state.first_name, this.state.last_name, this.state.password)
			.then(()=> localStorage.getItem("token") ? this.props.history.push("/home") : this.setState({alert: 'Please ensure username is unique and password fields match.'}) )
		} else {
			this.setState({alert: 'Please ensure username is unique and password fields match.'})
		}
	}

	render(){
		console.log(this.props)
		return (
			<div>
				<Form>
			    <Form.Group widths='equal'>
						<Form.Input name="first_name" value={this.state.first_name} placeholder='First Name' onChange={this.handleChange}/>
						<Form.Input name="last_name" value={this.state.last_name} placeholder='Last Name' onChange={this.handleChange}/>
						<Form.Input name="username" value={this.state.username} placeholder='Username' onChange={this.handleChange}/>
						<Form.Input type="password" name="password" value={this.state.password} placeholder='Password' onChange={this.handleChange}/>
						<Form.Input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder='Confirm Password' onChange={this.handleChange}/>
						{/* <Button onClick={this.handleLogin}>Login</Button> */}
						<Button onClick={this.handleSubmit}>Signup</Button>
			    </Form.Group>
					<div className='alert'>
						{this.state.alert}
					</div>
					<Form.Checkbox label='I agree to the Terms and Conditions' />
				</Form>
				<div>
					Already have an account? Log In
				</div>
			</div>
		)
	}

}


export default connect(null, { signup })(SignupForm)
