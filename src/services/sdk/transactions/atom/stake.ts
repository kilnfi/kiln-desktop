import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const stake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		accountId: searchInput(inputs, OptionInputId.atomAccountId) as string,
		walletAddress: searchInput(inputs, OptionInputId.atomWalletAddress) as string,
		amountAtom: searchInput(inputs, OptionInputId.atomStakeAmount) as number,
		poolId: searchInput(inputs, OptionInputId.atomValidatorAddress) as string,
		integration: searchInput(inputs, OptionInputId.atomIntegration) as string,
	};

	debugLog('ATOM STAKE', params);

	try {
		const tx = await k.atom.craftStakeTx(params.accountId, params.walletAddress, params.poolId, params.amountAtom);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default stake;
