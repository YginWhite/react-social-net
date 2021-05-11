import React from 'react';
import { Field } from 'react-final-form';
import CustomInput from "components/CustomInput/CustomInput.js";

const InputTextField = ({ name, label, textOptions }) => {
	const fieldSuccess = (meta) => meta.touched && !meta.error;
	const fieldError = (meta) => meta.touched && !!meta.error;
	const fieldLabel = (meta) => meta.touched && meta.error || label;

	return (
		<Field
			name={name}
			render={({input, meta}) => (
				<CustomInput
				  labelText={fieldLabel(meta)}
				  name={name}
				  formControlProps={{
				    fullWidth: true
				  }}
				  inputProps={{ ...input, ...textOptions }}
				  success={fieldSuccess(meta)}
				  error={fieldError(meta)}
				/>
			)}
		/>
	);
};

export default InputTextField;