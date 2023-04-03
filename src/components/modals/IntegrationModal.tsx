import { useEffect, useState } from 'react';

import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Button from '../ui/Button';

import { SdkIntegration } from '../../types/sdk';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (integration: SdkIntegration) => void;
	action: 'create' | 'update';
	defaultIntegration: SdkIntegration;
};

const IntegrationModal = ({ isOpen, onClose, onSubmit, action, defaultIntegration }: Props) => {
	const [integration, setIntegration] = useState<SdkIntegration>(defaultIntegration);

	const clearIntegration = () => setIntegration(defaultIntegration);

	const isValid = (): boolean => {
		if (
			integration.name === '' ||
			integration.fireblocksApiKey === '' ||
			integration.fireblocksSecretKey === '' ||
			integration.vaultId === undefined
		)
			return false;
		return true;
	};

	const setIntegrationSecretKeyFromFile = (e: any) => {
		e.preventDefault;
		const reader = new FileReader();
		reader.onload = (event) => {
			setIntegration({ ...integration, fireblocksSecretKey: event.target!.result as string });
		};
		reader.readAsText(e.target.files[0]);
	};

	useEffect(() => {
		setIntegration(defaultIntegration);
	}, [defaultIntegration]);

	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				clearIntegration();
				onClose();
			}}
			title={action === 'create' ? 'Add a new integration' : 'Update an integration'}
			className="w-[480px]"
		>
			<div className="flex flex-col space-y-4">
				<Input
					name="integration-name"
					label="Name"
					details={`You can put any value you want.\nWhen signing a transaction you will refer to this integration by its name.`}
					placeholder="vault-a"
					value={integration.name}
					onChange={(event) => setIntegration({ ...integration, name: event.target.value })}
				/>
				<Input
					name="integration-provider"
					label="Provider"
					details="For now only Fireblocks is supported."
					value={integration.provider}
					onChange={() => {}}
				/>
				<Input
					name="integration-secret-key"
					label="Fireblocks secret key"
					details={
						<div>
							<p className="text-xs">
								Generate a csr certificate unsing{' '}
								<a
									className="underline cursor-pointer"
									onClick={() =>
										window.utils.openInBrowser('https://docs.kiln.fi/v1/connect/sdk-setup/fireblocks-setup')
									}
								>
									Fireblocks tutorial
								</a>{' '}
								and store it somewhere safe.
							</p>
							<p className="text-xs">
								More information{' '}
								<a
									className="underline cursor-pointer"
									onClick={() =>
										window.utils.openInBrowser('https://docs.kiln.fi/v1/connect/sdk-setup/fireblocks-setup')
									}
								>
									here
								</a>
								.
							</p>
						</div>
					}
					type="file"
					placeholder="Secret Key"
					value={integration.fireblocksSecretKey}
					onChange={(event) => setIntegrationSecretKeyFromFile(event)}
				/>
				<Input
					name="integration-api-key"
					label="Fireblocks API key"
					details={
						<div>
							<p className="text-xs">
								Create an API user using the{' '}
								<a
									className="underline cursor-pointer"
									onClick={() =>
										window.utils.openInBrowser('https://docs.kiln.fi/v1/connect/sdk-setup/fireblocks-setup')
									}
								>
									Fireblocks tutorial
								</a>{' '}
								with the Editor role.
							</p>
							<p className="text-xs">
								More information{' '}
								<a
									className="underline cursor-pointer"
									onClick={() =>
										window.utils.openInBrowser('https://docs.kiln.fi/v1/connect/sdk-setup/fireblocks-setup')
									}
								>
									here
								</a>
								.
							</p>
						</div>
					}
					placeholder="xxx"
					value={integration.fireblocksApiKey}
					onChange={(event) => setIntegration({ ...integration, fireblocksApiKey: event.target.value })}
					type="password"
				/>
				<Input
					name="integration-vault-id"
					label="Vault ID"
					type="number"
					details={
						<div>
							<p className="text-xs">
								Get the vault account id you want to stake with by clicking on it in your Fireblocks workspace and check
								the URL.
								<br />
								For example the vault id of{' '}
								<a
									className="underline cursor-pointer"
									onClick={() =>
										window.utils.openInBrowser('https://docs.kiln.fi/v1/connect/sdk-setup/fireblocks-setup')
									}
								>
									https://console.fireblocks.io/v2/accounts/vault/4
								</a>{' '}
								is '4'.
							</p>
						</div>
					}
					placeholder="4"
					value={integration.vaultId}
					onChange={(value) => setIntegration({ ...integration, vaultId: value })}
				/>
				<Button
					disabled={!isValid()}
					onClick={() => {
						onSubmit(integration);
						onClose();
					}}
				>
					{action === 'create' ? 'Add' : 'Update'} integration
				</Button>
			</div>
		</Modal>
	);
};

export default IntegrationModal;
