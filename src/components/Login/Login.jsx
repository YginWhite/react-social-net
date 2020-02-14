import React from 'react';
import styles from './Login.module.css';

const Login = (props) => {
	return (
		<div className={styles.loginCont}>
			<h1>Login</h1>
			<LoginForm />
		</div>
	);
};

const LoginForm = (props) => {
	return (
		<form className={styles.loginForm}>
			<div>
				<input type="text" placeholder="Login"/>
			</div>
			<div>
				<input type="text" placeholder="Password"/>
			</div>
			<div>
				<input type="checkbox"/>Remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

export default Login;