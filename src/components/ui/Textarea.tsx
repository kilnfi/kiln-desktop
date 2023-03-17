import TextareaAutosize from 'react-textarea-autosize';

import Tooltip from './Tooltip';

type Props = {
	name: string;
	label?: string;
	details?: any;
	placeholder?: string;
	value: string;
	readOnly?: boolean;
	onChange?: (e: any) => void;
	required?: boolean;
	validFormat?: (content: string) => boolean;
	className?: string;
	icon?: any;
};

const Textarea = ({
	name,
	label,
	details,
	placeholder,
	value,
	readOnly = true,
	onChange = () => {},
	required = false,
	validFormat = (content: string) => true,
	className = '',
	icon,
}: Props) => {
	return (
		<div>
			{label && (
				<label htmlFor={name} className="text-caption-3 flex items-center">
					{label}
					{details && <Tooltip className="ml-1 z-10">{details}</Tooltip>}
				</label>
			)}
			<div className="relative rounded">
				<TextareaAutosize
					id={name}
					name={name}
					readOnly={readOnly}
					className={`
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
           `}
					style={{ width: '100%' }} // w-full doesn't work here...
					onChange={onChange}
					value={value}
					placeholder={placeholder}
					required={required}
				/>
				{icon && <div className="absolute inset-y-0 right-0 pr-3 flex items-center">{icon}</div>}
			</div>
			{required && (!value || value === '') && <p className="text-small-2 text-error">{label} is missing.</p>}
			{value && !validFormat(value) && <p className="text-small-2 text-error">{label} has a wrong format.</p>}
		</div>
	);
};

export default Textarea;
