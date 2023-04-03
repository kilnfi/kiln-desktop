import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const split = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		accountId: searchInput(inputs, OptionInputId.solAccountId) as string,
		stakeAccountAddress: searchInput(inputs, OptionInputId.solStakeAccountAddress) as string,
		walletAddress: searchInput(inputs, OptionInputId.solWalletAddress) as string,
		amountSol: searchInput(inputs, OptionInputId.solSplitAmount) as number,
		integration: searchInput(inputs, OptionInputId.solIntegration) as string,
	};

	debugLog('DOT SPLIT', params);

	try {
		const tx = await k.sol.craftSplitStakeTx(
			params.accountId,
			params.stakeAccountAddress,
			params.walletAddress,
			params.amountSol,
		);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default split;
