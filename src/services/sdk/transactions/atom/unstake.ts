import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const unstake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const amount = searchInput(inputs, OptionInputId.atomUnstakeAmount);
	const params = {
		walletAddress: searchInput(inputs, OptionInputId.atomWalletAddress) as string,
		validatorAddress: searchInput(inputs, OptionInputId.atomValidatorAddress) as string,
		amountAtom: amount ? (amount as number) : undefined,
		integration: searchInput(inputs, OptionInputId.atomIntegration) as string,
	};

	debugLog('ATOM UNSATKE', params);

	try {
		const tx = await k.atom.craftUnstakeTx(params.walletAddress, params.validatorAddress, params.amountAtom);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default unstake;
