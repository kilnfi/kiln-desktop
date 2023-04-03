import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const bond = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const options = searchInput(inputs, OptionInputId.dotOptions) as string;
	const params = {
		accountId: searchInput(inputs, OptionInputId.dotAccountId) as string,
		stashAccount: searchInput(inputs, OptionInputId.dotStashAccountAddress) as string,
		amountDot: searchInput(inputs, OptionInputId.dotBondAmount) as number,
		options: options ? JSON.parse(options) : undefined,
		integration: searchInput(inputs, OptionInputId.dotIntegration) as string,
	};

	debugLog('DOT BOND', params);

	try {
		const tx = await k.dot.craftBondTx(params.accountId, params.stashAccount, params.amountDot, params.options);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default bond;
