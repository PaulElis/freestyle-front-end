import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login } from '../actions/actions'
import { NavLink } from 'react-router-dom'

class LoginForm extends React.Component{

	state = {
		username: "",
		password: "",
		alert: null,
		signup: false,
	}

	handleChange = (event) => {
		console.log('in handleChange');
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleClick = (event) => {
		console.log('in handleClick');
		this.props.handleSignup(event)
	}

	handleLogin = (event) => {
		this.props.login(this.state.username, this.state.password)
			.then(()=> localStorage.getItem("token") ? this.props.history.push("/home") : this.setState({alert: 'The username and/or password entered is incorrect.'}) )
	}


	render(){
		// console.log('line 34', this.state)
		return (
			<div>
				<div className='welcome-container'>
					<div className='freelance-logo'>
						<h1>Freelancr</h1>
					</div>
	        <Form>
				    <Form.Group widths='equal'>
				      <Form.Input name="username" value={this.state.username} placeholder='Username' onChange={this.handleChange} />
				      <Form.Input type="password" name="password" value={this.state.password} placeholder='Password' onChange={this.handleChange} />
							<Button onClick={this.handleLogin}>Login</Button>
							{/* <Button onClick={this.handleClick}>Signup</Button> */}
				    </Form.Group>
						<div className='alert'>
							{this.state.alert}
						</div>
						<div className='checkbox'>
							<Form.Checkbox label='I agree to the Terms and Conditions' />
						</div>
						</Form>
					<div>
						Don't an account? <NavLink to="/signup">Sign up</NavLink>
					</div>
				</div>
			</div>
		)
	}

}

export default connect(null, {login})(LoginForm)
