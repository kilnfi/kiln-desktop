import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const withdrawRewards = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const amount = searchInput(inputs, OptionInputId.adaWithdrawRewardsAmount);
	const params = {
		walletAddress: searchInput(inputs, OptionInputId.adaWalletAddress) as string,
		amountAda: amount ? (amount as number) : undefined,
		integration: searchInput(inputs, OptionInputId.adaIntegration) as string,
	};

	debugLog('ADA WITHDRAW REWARDS', params);

	try {
		const tx = await k.ada.craftWithdrawRewardsTx(params.walletAddress, params.amountAda);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default withdrawRewards;
