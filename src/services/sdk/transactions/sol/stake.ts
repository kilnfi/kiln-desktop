import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const stake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		accountId: searchInput(inputs, OptionInputId.solAccountId) as string,
		walletAddress: searchInput(inputs, OptionInputId.solWalletAddress) as string,
		voteAccount: searchInput(inputs, OptionInputId.solVoteAccountAddress) as string,
		amountSol: searchInput(inputs, OptionInputId.solStakeAmount) as number,
		integration: searchInput(inputs, OptionInputId.solIntegration) as string,
	};

	debugLog('SOL STAKE', params);

	try {
		const tx = await k.sol.craftStakeTx(params.accountId, params.walletAddress, params.voteAccount, params.amountSol);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default stake;
