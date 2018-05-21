import React from 'react'
import '../styles/login.css'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login } from '../actions/actions'

class Login extends React.Component{

	state = {
		username: "",
		password: ""
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		this.props.login(this.state.username, this.state.password)
		.then(()=> this.props.history.push("/home"))
	}

	render(){
		console.log(this.state);
		return (
			<div className='login-container'>
				<br />
				<br />
				<br />
				<br />
				<Form>
			    <Form.Group widths='equal'>
			      <Form.Input name="username" value={this.state.username} placeholder='Username' onChange={this.handleChange} />
			      <Form.Input type="password" name="password" value={this.state.password} placeholder='Password' onChange={this.handleChange} />
						<Button onClick={this.handleSubmit}>Login</Button>
			    </Form.Group>
					<Form.Checkbox label='I agree to the Terms and Conditions' />
				</Form>
				<br />
				<br />
				<br />
				<br />

				{/* <Input name="username" value={this.state.username} onChange={this.handleChange}/>
				<Input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
				<Button onClick={this.handleSubmit}>Login!</Button> */}
			</div>
		)
	}

}


export default connect(null, { login })(Login)
