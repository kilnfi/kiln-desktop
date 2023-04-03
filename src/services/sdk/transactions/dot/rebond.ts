import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const rebond = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		controllerAccount: searchInput(inputs, OptionInputId.dotControllerAccountAddress) as string,
		amountDot: searchInput(inputs, OptionInputId.dotRebondAmount) as number,
		integration: searchInput(inputs, OptionInputId.dotIntegration) as string,
	};

	debugLog('DOT REBOND', params);

	try {
		const tx = await k.dot.craftRebondTx(params.controllerAccount, params.amountDot);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default rebond;
