import { useEffect, useState } from 'react';

import { CheckIcon, DuplicateIcon } from '../Icons';
import Tooltip from './Tooltip';

type Props = {
	content: string;
	className?: string;
};

const Clipboard = ({ content, className }: Props) => {
	const [hasCopy, setHasCopy] = useState<boolean>(false);

	const onClick = () => {
		navigator.clipboard.writeText(content);
		setHasCopy(true);
	};

	useEffect(() => {
		const timer = setTimeout(() => setHasCopy(false), 2000);

		return () => {
			clearTimeout(timer);
		};
	}, [hasCopy]);

	return (
		<div
			className={
				hasCopy
					? `${className} rounded-md p-2 border-solid border-success text-success border-[1px] hover:cursor-pointer bg-gray-100 hover:bg-gray-200`
					: `${className} rounded-md p-2 border-solid border-gray-700 text-gray-800 border-[1px] hover:cursor-pointer bg-gray-100 hover:bg-gray-200`
			}
		>
			<Tooltip
				trigger={
					hasCopy ? (
						<span>
							<CheckIcon className="w-4 h-4" />
						</span>
					) : (
						<span onClick={onClick}>
							<DuplicateIcon className="w-4 h-4" />
						</span>
					)
				}
			/>
		</div>
	);
};

export default Clipboard;
