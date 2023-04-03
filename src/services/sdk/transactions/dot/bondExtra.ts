import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const bondExtra = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		stashAccount: searchInput(inputs, OptionInputId.dotStashAccountAddress) as string,
		amountDot: searchInput(inputs, OptionInputId.dotBondExtraAmount) as number,
		integration: searchInput(inputs, OptionInputId.dotIntegration) as string,
	};

	debugLog('DOT BOND EXTRA', params);

	try {
		const tx = await k.dot.craftBondExtraTx(params.stashAccount, params.amountDot);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default bondExtra;
