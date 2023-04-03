import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const stake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		accountId: searchInput(inputs, OptionInputId.adaAccountId) as string,
		walletAddress: searchInput(inputs, OptionInputId.adaWalletAddress) as string,
		poolId: searchInput(inputs, OptionInputId.adaStakePoolId) as string,
		integration: searchInput(inputs, OptionInputId.adaIntegration) as string,
	};

	debugLog('ADA STAKE', params);

	try {
		const tx = await k.ada.craftStakeTx(params.accountId, params.walletAddress, params.poolId);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default stake;
