import React from 'react';
import styles from './Login.module.css';
import {reduxForm, Field} from 'redux-form';
import { TextInput } from './../common/FormControls/FormControls';
import { required, maxLength } from './../../utils/validators';
import { connect } from 'react-redux';
import { login } from './../../redux/authReducer';

const Login = (props) => {
	const onSubmit = (formData) => {
		const { login, password } = formData;
		console.log(login, password);
		//props.login(login, password);
	}

	return (
		<div id="featured">
			<div className="title">
				<h2>Login</h2>
				<div className="byline">
					<span>Type your login data:</span>
				</div>
			</div>

			<div className={styles.login}>
				<LoginReduxForm onSubmit={onSubmit}/>
			</div>
		</div>
	);
};

const maxLength25 = maxLength(25);

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={styles.login_form}>
			<div>
				<Field type="text" name="login" placeholder="Login" 
					component={TextInput} validate={[required, maxLength25]} />
			</div>
			<div>
				<Field type="text" name="password" placeholder="Password"
					component={TextInput} validate={[required, maxLength25]} />
			</div>
			<div>
				<Field type="checkbox" name="rememberMe" component="input"/>Remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default connect(null, { login })(Login);