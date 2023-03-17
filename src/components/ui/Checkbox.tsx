type Props = {
	name: string;
	checked: boolean;
	onChange: () => void;
	label?: string;
	disabled?: boolean;
	className?: string;
};

const Checkbox = ({ name, checked, onChange, label, disabled = false, className = '' }: Props) => {
	return (
		<div className={className}>
			<div className={`flex items-center`}>
				<input
					id={name}
					name={name}
					type="checkbox"
					className="h-4.5 w-4.5 text-black focus:ring-0 border-gray-900 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={disabled}
					checked={checked}
					onChange={onChange}
				/>
				{label && (
					<label
						htmlFor={name}
						className={`ml-2.5 mb-0 block text-sm text-black ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
					>
						{label}
					</label>
				)}
			</div>
		</div>
	);
};

export default Checkbox;
