import React from 'react';

function TextInput({
	title,
	inputName,
	placeholder,
	type,
	value,
	onChange,
}) {
	return (
		<section className='m-1'>
			<label className='m-1 block text-sm font-medium leading-6 text-gray-900'>{title}</label>
			<input 
				name={inputName}
				className='block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
				type={type}
				placeholder={placeholder} 
				value={value} 
				onChange={onChange}
			/>
		</section>
	);
}

export default TextInput;