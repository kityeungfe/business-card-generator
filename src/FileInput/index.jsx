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
	const [preview, setPreview] = React.useState("");

	return (
		<section className='m-1'>
			<label className='m-1 block text-sm font-medium leading-6 text-gray-900'>{title}</label>
			{
				preview.length == 0 &&
				<label htmlFor={`file_input_${inputId}`} className='h-32 w-32 m-1 flex items-center justify-center border-dashed text-4xl border-2 font-medium leading-6 text-gray-900'>{'+'}</label>
			}
			{
				preview && preview.length > 0 &&
				<img src={preview} className='h-32 w-32 m-1' />
			}
			<input 
				id={`file_input_${inputId}`}
				name={inputName}
				className='hidden'
				type={'file'}
				accept='image/*'
				placeholder={placeholder} 
				value={value} 
				onChange={(e) => {
					let file = e.target.files[0]
					let reader = new FileReader()

					reader.onloadend = () => {
						setPreview(reader.result)
					}

					reader.readAsDataURL(file)

					onChange(e)
				}}
			/>
		</section>
	);
}

export default FileInput;