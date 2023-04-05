import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const unstake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		walletAddress: searchInput(inputs, OptionInputId.xtzWalletAddress) as string,
		integration: searchInput(inputs, OptionInputId.adaIntegration) as string,
	};

	debugLog('XTZ UNSTAKE', params);

	try {
		const tx = await k.xtz.craftUnStakeTx(params.walletAddress);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default unstake;
