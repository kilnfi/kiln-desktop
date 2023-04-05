import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const restakeRewards = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		walletAddress: searchInput(inputs, OptionInputId.maticWalletAddress) as string,
		validatorShareProxyAddress: searchInput(inputs, OptionInputId.maticValidatorShareProxyAddress) as string,
		integration: searchInput(inputs, OptionInputId.maticIntegration) as string,
	};

	debugLog('MATIC RESTAKE REWARDS', params);

	try {
		const tx = await k.matic.craftRestakeRewardsTx(params.walletAddress, params.validatorShareProxyAddress);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default restakeRewards;
