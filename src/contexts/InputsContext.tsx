import { createContext, useEffect, useState } from 'react';

import { Sdk, SdkIntegration } from '../types/sdk';
import { Input } from '../types/input';

type Props = {
	children: any;
};

type InputsContextType = {
	sdk: Sdk;
	inputs: Input[];
	setTestnetSdk: (testnet: boolean) => void;
	setApiTokenSdk: (apiToken: string) => void;
	addIntegrationSdk: (integration: SdkIntegration) => void;
	updateIntegrationSdk: (name: string, integration: SdkIntegration) => void;
	removeIntegrationSdk: (name: string) => void;
	updateInputs: (input: Input) => void;
	clearSdk: () => void;
	clearInputs: () => void;
};

const defaultSdk: Sdk = {
	testnet: true,
	apiToken: '',
	integrations: [],
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

	const clearSdk = () => setSdk(defaultSdk);
	const clearInputs = () => setInputs([]);

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

	const updateInputs = (input: Input) => setInputs([...inputs.filter((i) => i.id !== input.id), input]);

	useEffect(() => {
		// console.log(sdk);
		saveSdk();
	}, [sdk]);

	useEffect(() => {
		// console.log(inputs);
		saveInputs();
	}, [inputs]);

	useEffect(() => {
		setSdk(loadSdk());
		setInputs(loadInputs());
	}, []);

	return (
		<InputsContext.Provider
			value={{
				sdk,
				inputs,
				setTestnetSdk,
				setApiTokenSdk,
				addIntegrationSdk,
				updateIntegrationSdk,
				removeIntegrationSdk,
				updateInputs,
				clearSdk,
				clearInputs,
			}}
		>
			{children}
		</InputsContext.Provider>
	);
};

export type { InputsContextType };
export { InputsContext };
export default InputsContextProvider;
