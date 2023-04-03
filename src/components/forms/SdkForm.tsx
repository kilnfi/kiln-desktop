import { useState } from 'react';
import { SdkIntegration } from '../../types/sdk';

import useInputs from '../../hooks/useInputs';
import IntegrationCard from '../cards/IntegrationCard';
import IntegrationModal from '../modals/IntegrationModal';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';

const SdkForm = () => {
	const [openIntegration, setOpenIntegration] = useState<boolean>(false);
	const {
		sdk,
		setTestnetSdk,
		setApiTokenSdk,
		addIntegrationSdk,
		updateIntegrationSdk,
		removeIntegrationSdk,
	} = useInputs();

	const defaultIntegration: SdkIntegration = {
		name: '',
		provider: 'fireblocks',
		fireblocksApiKey: '',
		fireblocksSecretKey: '',
		vaultId: 0,
	};
	const [selectedIntegration, setSelectedIntegration] = useState<SdkIntegration>(defaultIntegration);
	const isDefaultIntegration = () => JSON.stringify(selectedIntegration) === JSON.stringify(defaultIntegration);

	return (
		<div className="flex flex-col space-y-4">
			<p className="text-body-3 text-primary">Setup Kiln Connect Sdk</p>
			<div className="flex flex-col space-y-4">
				<Select
					name="Network"
					label="Network"
					details="Only Testnet and Mainnet networks are available."
					onChange={(e) => (e.target.value === 'testnet' ? setTestnetSdk(true) : setTestnetSdk(false))}
					value={sdk.testnet ? 'testnet' : 'mainnet'}
					required={true}
				>
					<option value="testnet">Testnet</option>
					<option value="mainnet">Mainnet</option>
				</Select>
				<Input
					name="sdk-api-token"
					type="password"
					required={true}
					label="Kiln API token"
					details={
						<div>
							<p className="text-xs">Get your Kiln API token from your Kiln dashboard.</p>
							<p className="text-xs">
								More information{' '}
								<a
									className="underline cursor-pointer"
									onClick={() =>
										window.utils.openInBrowser('https://docs.kiln.fi/v1/connect/sdk-setup#retrieve-kiln-api-key')
									}
								>
									here
								</a>
								.
							</p>
						</div>
					}
					placeholder="kiln_xxx"
					onChange={(event) => setApiTokenSdk(event.target.value)}
					value={sdk.apiToken}
				/>
				<div>
					<label htmlFor="Integrations" className="text-caption-3">
						Integrations
					</label>
					{sdk.integrations.map((integration, index) => (
						<div className="mb-2" key={index.toString()}>
							<IntegrationCard
								integration={integration}
								onSelected={() => {
									setSelectedIntegration(integration);
									setOpenIntegration(true);
								}}
								onDelete={() => removeIntegrationSdk(integration.name)}
							/>
							{!integration.fireblocksSecretKey && (
								<p className="text-small-2 text-error">Fireblocks secret key missing.</p>
							)}
						</div>
					))}
					<Button variant="secondary" onClick={() => setOpenIntegration(true)}>
						Add an integration
					</Button>
				</div>
				<IntegrationModal
					isOpen={openIntegration}
					onClose={() => {
						setSelectedIntegration(defaultIntegration);
						setOpenIntegration(false);
					}}
					onSubmit={(it) =>
						isDefaultIntegration() ? addIntegrationSdk(it) : updateIntegrationSdk(selectedIntegration.name, it)
					}
					action={isDefaultIntegration() ? 'create' : 'update'}
					defaultIntegration={selectedIntegration}
				/>
			</div>
		</div>
	);
};

export default SdkForm;
