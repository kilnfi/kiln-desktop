import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const sellVoucher = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		walletAddress: searchInput(inputs, OptionInputId.maticWalletAddress) as string,
		validatorShareProxyAddress: searchInput(inputs, OptionInputId.maticValidatorShareProxyAddress) as string,
		amountMatic: searchInput(inputs, OptionInputId.maticSellVoucherAmount) as number,
		integration: searchInput(inputs, OptionInputId.maticIntegration) as string,
	};

	debugLog('MATIC SELL VOUCHER', params);

	try {
		const tx = await k.matic.craftSellVoucherTx(params.walletAddress, params.validatorShareProxyAddress, params.amountMatic);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default sellVoucher;
