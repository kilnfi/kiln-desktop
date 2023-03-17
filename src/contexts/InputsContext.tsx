import { createContext, useEffect, useState } from 'react';

import { Sdk, SdkIntegration, SdkRpcs } from '../types/sdk';
import { Input } from '../types/input';

type Props = {
	children: any;
};

type InputsContextType = {
	sdk: Sdk;
	inputs: Input[];
	save: boolean;
	setSave: (value: boolean) => void;
	setTestnetSdk: (testnet: boolean) => void;
	setApiTokenSdk: (apiToken: string) => void;
	addIntegrationSdk: (integration: SdkIntegration) => void;
	updateIntegrationSdk: (name: string, integration: SdkIntegration) => void;
	removeIntegrationSdk: (name: string) => void;
	updateRpcSdk: (rpc: SdkRpcs) => void;
	updateInputs: (input: Input) => void;
};

const defaultSdk: Sdk = {
	testnet: true,
	apiToken: '',
	integrations: [],
	rpcs: {},
};

const InputsContext = createContext<InputsContextType | undefined>(undefined);

const InputsContextProvider = ({ children }: Props) => {
	const saveSdk = () =>
		localStorage.setItem(
			'sdk',
			JSON.stringify({ ...sdk, integrations: sdk.integrations.map((i) => ({ ...i, fireblocksSecretKey: '' })) }),
		);
	const saveInputs = () => localStorage.setItem('inputs', JSON.stringify(inputs));
	const loadSdk = () => JSON.parse(localStorage.getItem('sdk') || JSON.stringify(defaultSdk));
	const loadInputs = () => JSON.parse(localStorage.getItem('inputs') || '[]');

	const [sdk, setSdk] = useState<Sdk>(loadSdk());
	const [inputs, setInputs] = useState<Input[]>(loadInputs());
	const [save, setSave] = useState<boolean>(true);

	const setTestnetSdk = (testnet: boolean) => setSdk({ ...sdk, testnet });
	const setApiTokenSdk = (apiToken: string) => setSdk({ ...sdk, apiToken });
	const addIntegrationSdk = (integration: SdkIntegration) =>
		setSdk({ ...sdk, integrations: [...sdk.integrations, integration] });
	const updateIntegrationSdk = (name: string, integration: SdkIntegration) => {
		const newIntegrations = sdk.integrations.map((i) => (i.name === name ? integration : i));
		setSdk({ ...sdk, integrations: [...newIntegrations] });
	};
	const removeIntegrationSdk = (name: string) =>
		setSdk({ ...sdk, integrations: sdk.integrations.filter((i) => i.name !== name) });
	const updateRpcSdk = (rpc: SdkRpcs) => setSdk({ ...sdk, rpcs: { ...sdk.rpcs, ...rpc } });

	const updateInputs = (input: Input) => setInputs([...inputs.filter((i) => i.id !== input.id), input]);

	useEffect(() => {
		// console.log(sdk);
		if (save) saveSdk();
	}, [sdk]);

	useEffect(() => {
		// console.log(inputs);
		if (save) saveInputs();
	}, [inputs]);

	useEffect(() => {
		if (save) {
			saveSdk();
			saveInputs();
		} else {
			localStorage.removeItem('sdk');
			localStorage.removeItem('inputs');
		}
	}, [save]);

	useEffect(() => {
		setSdk(loadSdk());
		setInputs(loadInputs());
	}, []);

	return (
		<InputsContext.Provider
			value={{
				sdk,
				inputs,
				save,
				setSave,
				setTestnetSdk,
				setApiTokenSdk,
				addIntegrationSdk,
				updateIntegrationSdk,
				removeIntegrationSdk,
				updateRpcSdk,
				updateInputs,
			}}
		>
			{children}
		</InputsContext.Provider>
	);
};

export type { InputsContextType };
export { InputsContext };
export default InputsContextProvider;
