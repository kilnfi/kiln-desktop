import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import { PlusIcon } from '../Icons';

export const getButtonStyles = (variant: variant, size: size) => {
	return `inline-flex
            items-center
            gap-x-2
            justify-center
            focus:outline-none
            transition
            duration-150
            ease-in-out
            disabled:cursor-not-allowed
            whitespace-no-wrap
            rounded
            no-underline
            text-subtitle-2
            group
            min-w-[200px]
            ${
							variant === 'primary'
								? 'text-white bg-primary hover:bg-primary-hover border-0 focus:bg-primary-pressed disabled:bg-primary-disabled'
								: ''
						}
            ${
							variant === 'secondary'
								? 'text-black bg-primary-tint-200 hover:bg-primary-tint-100 border border-primary focus:bg-primary-tint-300 disabled:border-gray-200 disabled:bg-white disabled:text-gray-500'
								: ''
						}
            ${
							variant === 'tertiary'
								? 'text-gray-800 bg-white border border-gray-100 hover:bg-gray-50 hover:border-gray-500 focus:bg-gray-100 focus:border-gray-800 disabled:border-gray-100 disabled:bg-gray-100 disabled:text-gray-500 '
								: ''
						}
            ${variant === 'circle' ? 'text-black border-0' : ''}
            ${size === 'normal' ? 'h-[56px] px-6' : ''}
            ${size === 'small' ? 'h-[40px] px-4' : ''}
           `;
};

type variant = 'primary' | 'secondary' | 'tertiary' | 'circle';
type size = 'normal' | 'small';

type Props = {
	children: any;
	className?: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: () => void;
	disabled?: boolean;
	download?: boolean | string;
	variant?: variant;
	size?: size;
};

const Plus = () => (
	<span className="ml-4 rounded-full p-2 bg-primary group-hover:bg-primary-hover group-focus:bg-primary-pressed group-disabled:bg-primary-disabled">
		<PlusIcon className="w-2 h-2" />
	</span>
);

const Button = ({
	children,
	className = '',
	type = 'button',
	variant = 'primary',
	size = 'normal',
	...props
}: Props) => {
	return (
		<button
			{...props}
			type={type}
			className={`${getButtonStyles(variant, size)} ${className}`}
			style={{ width: '100%' }} // w-full doesn't work here...
		>
			{children}
			{variant === 'circle' && <Plus />}
		</button>
	);
};

export default Button;
