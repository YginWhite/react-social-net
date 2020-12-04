import React from 'react';

const FormControl = ({ meta, ...props }) => {
	const hasError = meta.touched && meta.error;

	return (
		<div>
			<div>
				{props.children}
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	);
};

export const TextInput = (props) => {
	return (
		<FormControl {...props}>
			<input {...props} {...props.input} />
		</FormControl>
	);
};