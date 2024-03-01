import React from 'react';
import { generateMixed } from '../utils';

function FileInput({
	title,
	inputName,
	placeholder,
	value,
	onChange,
}) {
	const inputId = generateMixed(10)
	return (
		<section className='m-1'>
			<label htmlFor={`file_input_${inputId}`} className='m-1 block text-sm font-medium leading-6 text-gray-900'>{title}</label>
			<input 
				id={`file_input_${inputId}`}
				name={inputName}
				className='hidden'
				type={'file'}
				placeholder={placeholder} 
				value={value} 
				onChange={onChange}
			/>
		</section>
	);
}

export default FileInput;