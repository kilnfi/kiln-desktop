import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const setController = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		stashAccount: searchInput(inputs, OptionInputId.dotStashAccountAddress) as string,
		controllerAccount: searchInput(inputs, OptionInputId.dotControllerAccountAddress) as string,
		integration: searchInput(inputs, OptionInputId.dotIntegration) as string,
	};

	debugLog('DOT SET CONTROLLER', params);

	try {
		const tx = await k.dot.craftSetControllerTx(params.stashAccount, params.controllerAccount);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default setController;
