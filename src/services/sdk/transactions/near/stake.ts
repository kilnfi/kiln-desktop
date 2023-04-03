import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const stake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		accountId: searchInput(inputs, OptionInputId.nearAccountId) as string,
		walletAddress: searchInput(inputs, OptionInputId.nearWalletAddress) as string,
		poolId: searchInput(inputs, OptionInputId.nearStakePoolId) as string,
		amountNear: searchInput(inputs, OptionInputId.nearStakeAmount) as number,
		integration: searchInput(inputs, OptionInputId.nearIntegration) as string,
	};

	debugLog('NEAR STAKE', params);

	try {
		const tx = await k.near.craftStakeTx(params.accountId, params.walletAddress, params.poolId, params.amountNear);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default stake;
