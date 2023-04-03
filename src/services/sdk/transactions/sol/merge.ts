import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const merge = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		stakeAccountSourceAddress: searchInput(inputs, OptionInputId.solStakeAccountSourceAddress) as string,
		stakeAccountDestinationAddress: searchInput(inputs, OptionInputId.solStakeAccountDestinationAddress) as string,
		walletAddress: searchInput(inputs, OptionInputId.solWalletAddress) as string,
		integration: searchInput(inputs, OptionInputId.solIntegration) as string,
	};

	debugLog('SOL MERGE', params);

	try {
		const tx = await k.sol.craftMergeStakesTx(
			params.stakeAccountSourceAddress,
			params.stakeAccountDestinationAddress,
			params.walletAddress,
		);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default merge;
