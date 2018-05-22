import React from 'react'
import '../styles/welcome.css'
import { Form, Button } from 'semantic-ui-react'
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
				<div className='welcome-container'>
					<div className='freelance-logo'>
						<h1 id="freelance-logo-title">Freelancr</h1>
					</div>
					<Form>
				    <Form.Group widths='equal'>
							<Form.Input name="first_name" value={this.state.first_name} placeholder='First Name' onChange={this.handleChange}/>
							<Form.Input name="last_name" value={this.state.last_name} placeholder='Last Name' onChange={this.handleChange}/><br />
						</Form.Group>
							<Form.Input name="username" value={this.state.username} placeholder='Username' onChange={this.handleChange}/>
						<Form.Group  widths='equal'>
							<Form.Input type="password" name="password" value={this.state.password} placeholder='Password' onChange={this.handleChange}/>
							<Form.Input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder='Confirm Password' onChange={this.handleChange}/>
						</Form.Group>
							<Button onClick={this.handleSubmit}>Signup</Button>
						<div className='alert'>
							{this.state.alert}
						</div>
						<div className='checkbox'>
							<Form.Checkbox label='I agree to the Terms and Conditions' />
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
