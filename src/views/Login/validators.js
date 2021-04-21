import { required, maxLength } from '../../utils/validators';

export const loginValidator = ({ username, email }) => {
	const errors = {};
	const usernameRequired = required(username);
	const emailRequired = required(email);

	if (usernameRequired) errors.username = usernameRequired;
	if (emailRequired) errors.email = emailRequired;

	return errors;
}