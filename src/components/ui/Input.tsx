import { useRef } from 'react';
import { NumericFormat } from 'react-number-format';

import Tooltip from './Tooltip';

type Props = {
	name: string;
	label?: string;
	details?: any;
	placeholder?: string;
	onChange: (e: any) => void;
	value: string | number;
	type?: 'number' | 'password' | 'email' | 'text' | 'file';
	required?: boolean;
	className?: string;
	disabled?: boolean;
	icon?: any;
};

const Input = ({
	name,
	label,
	details,
	placeholder,
	onChange,
	value,
	type = 'text',
	required = false,
	className = '',
	disabled = false,
	icon,
}: Props) => {
	const inputField = useRef(null);
	const style = `
		p-4
		rounded
		block
		w-full
		border
		border-gray-200
		text-black
		text-body-1
		bg-white
		font-sans
		text-left
		appearance-none
		relative
		transition ease-in duration-150
		placeholder:text-gray-700
		focus:outline-none
		focus:ring-0
		focus:border-primary
		disabled:bg-gray-100
		disabled:border-gray-100
		disabled:cursor-not-allowed
		disabled:text-gray-500
		${className}
	`;

	return (
		<div>
			{label && (
				<label htmlFor={name} className="text-caption-3 flex items-center">
					{label}
					{details && <Tooltip className="ml-1 z-10">{details}</Tooltip>}
				</label>
			)}
			<div className="relative rounded">
				{type === 'file' && (
					<div className={`${style} flex align-center`}>
						<button className="px-2 bg-gray-100 rounded-sm text-sm" onClick={() => inputField.current.click()}>
							Choose file
						</button>
						{<p className="ml-2">{value ? 'File uploaded successfully' : 'No file uploaded'}</p>}
					</div>
				)}
				{type === 'number' ? (
					<NumericFormat
						id={name}
						name={name}
						className={style}
						style={{ width: '100%', display: 'inline' }} // w-full doesn't work here...
						value={value}
						placeholder={placeholder}
						onChange={(e) => onChange(+e.target.value.replace(/,/g, ''))}
						required={required}
						disabled={disabled}
						thousandSeparator=","
					/>
				) : (
					<input
						id={name}
						ref={inputField}
						name={name}
						className={style}
						style={{ width: '100%', display: type === 'file' ? 'none' : 'inline' }} // w-full doesn't work here...
						type={type}
						value={type === 'file' ? undefined : value}
						placeholder={placeholder}
						onChange={onChange}
						required={required}
						disabled={disabled}
					/>
				)}
				{icon && <div className="absolute inset-y-0 right-0 pr-3 flex items-center">{icon}</div>}
			</div>
			{required && (!value || value === '') && <p className="text-small-2 text-error">{label} is missing.</p>}
		</div>
	);
};

export default Input;
