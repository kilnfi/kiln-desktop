import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const withdraw = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const amount = searchInput(inputs, OptionInputId.nearWithdrawAmount);
	const params = {
		walletAddress: searchInput(inputs, OptionInputId.nearWalletAddress) as string,
		stakePoolId: searchInput(inputs, OptionInputId.nearStakePoolId) as string,
		amountNear: amount ? (amount as number) : undefined,
		integration: searchInput(inputs, OptionInputId.nearIntegration) as string,
	};

	debugLog('NEAR WITHDRAW', params);

	try {
		const tx = await k.near.craftWithdrawTx(params.walletAddress, params.stakePoolId, params.amountNear);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default withdraw;
