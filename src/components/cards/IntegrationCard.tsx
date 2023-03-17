import { useState } from 'react';

import { BinIcon, EditIcon } from '../Icons';

import { SdkIntegration } from '../../types/sdk';

type Props = {
	integration: SdkIntegration;
	onSelected: () => void;
	onDelete: () => void;
};

const IntegrationCard = ({ integration, onSelected, onDelete }: Props) => (
	<div>
		<div
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
						`}
		>
			<p>Integration: {integration.name}</p>
			<button onClick={onSelected} className="absolute inset-y-0 right-12 group flex items-center w-full px-2 py-2">
				<EditIcon className="w-5 h-5" />
			</button>
			<button onClick={onDelete} className="absolute inset-y-0 right-2 group flex items-center w-full px-2 py-2">
				<BinIcon className="w-5 h-5" />
			</button>
		</div>
	</div>
);

export default IntegrationCard;
