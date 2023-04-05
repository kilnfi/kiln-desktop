import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const stake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		accountId: searchInput(inputs, OptionInputId.xtzAccountId) as string,
		walletAddress: searchInput(inputs, OptionInputId.xtzWalletAddress) as string,
		bakerAddress: searchInput(inputs, OptionInputId.xtzBakerAddress) as string,
		integration: searchInput(inputs, OptionInputId.adaIntegration) as string,
	};

	debugLog('XTZ STAKE', params);

	try {
		const tx = await k.xtz.craftStakeTx(params.accountId, params.walletAddress, params.bakerAddress);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default stake;
