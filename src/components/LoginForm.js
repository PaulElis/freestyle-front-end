import React from 'react'
import '../styles/welcome.css'
import { Button, Form, Icon, Message, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login } from '../actions/actions'
import { NavLink } from 'react-router-dom'

class LoginForm extends React.Component{

	state = {
		username: "user_demo",
		password: "1234",
		alert: false,
		signup: false,
	}

	handleChange = (event) => {
		// console.log('in handleChange');
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
			// .then(()=> localStorage.getItem("token") ? this.props.history.push("/home") : this.setState({alert: 'The username and/or password entered is incorrect.'}) )
			.then(()=> localStorage.getItem("token") ? this.props.history.push("/home") : this.setState({alert: true}) )
	}


	render(){
		// console.log('line 34', this.state)

		return (
			<div>
				<div className='welcome-container'>
					<div className='freelance-logo'>
						<h1 id="freelance-logo-title">Freestyle</h1>
					</div>
	        <Form error id='welcome-form'>
				    <Form.Group widths='equal'>
				      <Form.Input fluid
								name="username"
								placeholder='Username'
								value={this.state.username}
								onChange={this.handleChange} />
				      <Form.Input fluid
								type="password"
								name="password"
								placeholder='Password'
								value={this.state.password}
								onChange={this.handleChange} />
						</Form.Group>
							<Button fluid size='large' color='blue' icon labelPosition='right' onClick={this.handleLogin}>
									Login
								<Icon name='right arrow' />
							</Button>
							{this.state.alert ?
							<Message
								error
								// header='Invalid Login'
								content='The username and/or password entered is incorrect.'
							/>
							: ''}
						{/* <div className='checkbox'>
							<Form.Checkbox label='I agree to the Terms and Conditions' defaultChecked />
						</div> */}
						<div id='welcome-message'>
							Don't have an account? <NavLink to="/signup">Sign up</NavLink>
						</div>
					</Form>
				</div>
			</div>
		)
	}

}

export default connect(null, {login})(LoginForm)
