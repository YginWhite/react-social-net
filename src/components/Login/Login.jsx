import React from 'react';
import styles from './Login.module.css';
import {reduxForm, Field} from 'redux-form';
import { TextInput } from './../common/FormControls/FormControls';
import { required, maxLength } from './../../utils/validators';

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
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

const maxLength15 = maxLength(15);

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={styles.login_form}>
			<div>
				<Field type="text" name="login" placeholder="Login" 
					component={TextInput} validate={[required, maxLength15]} />
			</div>
			<div>
				<Field type="text" name="password" placeholder="Password"
					component={TextInput} validate={[required, maxLength15]} />
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

export default Login;