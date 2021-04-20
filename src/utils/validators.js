export const required = (value) =>
	value ? undefined : 'Required';

export const maxLength = (length) =>
	(value) => value.length <= length ? undefined : `Max text length is ${length}`;