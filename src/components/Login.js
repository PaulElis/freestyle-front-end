import React from 'react'
import '../styles/login.css'
// import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login } from '../actions/actions'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

class Login extends React.Component{

	state = {
		username: "",
		password: "",
		alert: null,
		signup: false,
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSignup = (event) => {
		console.log(this.state.signup);
		this.setState({
			signup: !this.state.signup
		})
	}

	render(){
		// console.log('line 37', this.props);
		return (
			<div className='login-container'>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
					<h1>Freelancr</h1>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
						<div className='Welcome-Container'>
							{ this.state.signup ? <SignupForm history={this.props.history} username={this.state.username} password={this.state.password} signup={this.state.signup} alert={this.state.alert} handleChange={this.handleChange} handleLogin={this.handleLogin} handleSignup={this.handleSignup}/> : <LoginForm history={this.props.history} username={this.state.username} password={this.state.password} signup={this.state.signup} alert={this.state.alert} handleChange={this.handleChange} handleLogin={this.handleLogin} handleSignup={this.handleSignup} /> }
						</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		)
	}
}


export default connect(null, { login })(Login)
