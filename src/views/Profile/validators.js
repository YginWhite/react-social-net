import { required, maxLength } from '../../utils/validators';

export const postValidator = ({ newPost }) => {
	const requiredError = required(newPost);
	if (requiredError) return { newPost: requiredError };

	const maxLengthError = maxLength(10)(newPost);
	if (maxLengthError) return { newPost: maxLengthError };
}
