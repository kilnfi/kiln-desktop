import { useState } from 'react';

import RpcsModal from '../modals/RpcsModal';
import Button from '../ui/Button';

import { SdkRpcs } from '../../types/sdk';

type Props = {
	rpcs: SdkRpcs;
	onUpdate: (rpcs: SdkRpcs) => void;
};

const RpcsCard = ({ rpcs, onUpdate }: Props) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div>
			<Button variant="tertiary" onClick={() => setOpen(true)}>
				Update RPC nodes
			</Button>
			<RpcsModal
				isOpen={open}
				onClose={() => setOpen(false)}
				onSubmit={onUpdate}
				defaultRpcs={rpcs}
				title="Update RPC nodes"
			/>
		</div>
	);
};

export default RpcsCard;
