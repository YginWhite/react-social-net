export const required = (value) =>
	value ? undefined : 'text is required';

export const maxLength = (length) =>
	(value) => value.length <= length ? undefined : `max text length is ${length}`; 