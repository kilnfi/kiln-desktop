import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const withdraw = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const amount = searchInput(inputs, OptionInputId.solWithdrawAmount);
	const params = {
		stakeAccountAddress: searchInput(inputs, OptionInputId.solStakeAccountAddress) as string,
		walletAddress: searchInput(inputs, OptionInputId.solWalletAddress) as string,
		amountSol: amount ? (amount as number) : undefined,
		integration: searchInput(inputs, OptionInputId.solIntegration) as string,
	};

	debugLog('SOL WITHDRAW', params);

	try {
		const tx = await k.sol.craftWithdrawStakeTx(params.stakeAccountAddress, params.walletAddress, params.amountSol);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default withdraw;
