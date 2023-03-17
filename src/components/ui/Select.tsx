import Tooltip from './Tooltip';

type Props = {
	name: string;
	label?: string;
	details?: string;
	value: string | number;
	onChange: (e: any) => void;
	children: any;
	required?: boolean;
	className?: string;
};

const Select = ({ name, label, details, value, onChange, children, required = false, className = '' }: Props) => (
	<div>
		{label && (
			<label htmlFor={name} className="text-caption-3 flex items-center">
				{label}
				{details && <Tooltip className="ml-1">{details}</Tooltip>}
			</label>
		)}
		<div className="relative rounded">
			<select
				id={name}
				name={name}
				onChange={onChange}
				required={required}
				value={value}
				className="mt-1 block w-full pl-3 pr-10 py-2 text-black text-body-1 border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md"
				style={{ width: '100%' }} // w-full doesn't work here...
			>
				{children}
			</select>
		</div>
		{required && (!value || value === '' || value === 'placeholder') && (
			<p className="text-small-2 text-error">{label} is missing.</p>
		)}
	</div>
);

export default Select;
