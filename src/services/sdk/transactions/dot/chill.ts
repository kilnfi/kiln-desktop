import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const chill = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		controllerAccount: searchInput(inputs, OptionInputId.dotControllerAccountAddress) as string,
		integration: searchInput(inputs, OptionInputId.dotIntegration) as string,
	};

	debugLog('DOT CHILL', params);

	try {
		const tx = await k.dot.craftChillTx(params.controllerAccount);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default chill;
