import { useState } from 'react';

import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Button from '../ui/Button';

import { SdkRpcs } from '../../types/sdk';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (integration: SdkRpcs) => void;
	defaultRpcs: SdkRpcs;
	title: any;
};

const IntegrationModal = ({ isOpen, onClose, onSubmit, defaultRpcs, title }: Props) => {
	const [rpcs, setRpcs] = useState<SdkRpcs>(defaultRpcs);

	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				onClose();
				setRpcs(defaultRpcs);
			}}
			title={title}
			className="w-[480px]"
		>
			<div className="flex flex-col space-y-4">
				<Input
					name="rpc-ethereum"
					label="Ethereum"
					placeholder="Kiln rpc by default"
					value={rpcs.ethereum}
					onChange={(event) => setRpcs({ ...rpcs, ethereum: event.target.value })}
				/>
				<Input
					name="rpc-atom"
					label="Cosmos Hub"
					placeholder="Kiln rpc by default"
					value={rpcs.atom}
					onChange={(event) => setRpcs({ ...rpcs, atom: event.target.value })}
				/>
				<Input
					name="rpc-dot"
					label="Polkadot"
					placeholder="Kiln rpc by default"
					value={rpcs.dot}
					onChange={(event) => setRpcs({ ...rpcs, dot: event.target.value })}
				/>
				<Input
					name="rpc-near"
					label="Near"
					placeholder="Kiln rpc by default"
					value={rpcs.near}
					onChange={(event) => setRpcs({ ...rpcs, near: event.target.value })}
				/>
				<Input
					name="rpc-solana"
					label="Solana"
					placeholder="Kiln rpc by default"
					value={rpcs.solana}
					onChange={(event) => setRpcs({ ...rpcs, solana: event.target.value })}
				/>
				<Button
					onClick={() => {
						onSubmit(rpcs);
						setRpcs(rpcs);
						onClose();
					}}
				>
					Update RPCs
				</Button>
			</div>
		</Modal>
	);
};

export default IntegrationModal;
