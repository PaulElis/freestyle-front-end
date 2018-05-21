import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login } from '../actions/actions'

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
		console.log('line 34', this.state)
		return (
			<div>
        <Form>
			    <Form.Group widths='equal'>
			      <Form.Input name="username" value={this.state.username} placeholder='Username' onChange={this.handleChange} />
			      <Form.Input type="password" name="password" value={this.state.password} placeholder='Password' onChange={this.handleChange} />
						<Button onClick={this.handleLogin}>Login</Button>
						<Button onClick={this.handleClick}>Signup</Button>
			    </Form.Group>
					<div className='alert'>
						{this.state.alert}
					</div>
					<Form.Checkbox label='I agree to the Terms and Conditions' />
				</Form>
			</div>
		)
	}

}
//
// function mapStateToProps(state){
//   // console.log('line 109: state', state)
//   return {
// 		username: state.username,
// 		password: state.password,
// 		alert: state.alert,
// 		signup: state.signup,
// 		}
// }


export default connect(null, {login})(LoginForm)
