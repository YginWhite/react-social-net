import React from 'react';
import styles from './Login.module.css';
import {reduxForm, Field} from 'redux-form';

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
	}

	return (
		<div className={styles.loginCont}>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	);
};

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={styles.loginForm}>
			<div>
				<Field type="text" name="login" placeholder="Login" component="input"/>
			</div>
			<div>
				<Field type="text" name="password" placeholder="Password" component="input"/>
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