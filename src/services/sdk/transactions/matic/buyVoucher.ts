import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';
import signAndBroadcast from './utils';

const buyVoucher = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
    accountId: searchInput(inputs, OptionInputId.maticAccountId) as string,
		walletAddress: searchInput(inputs, OptionInputId.maticWalletAddress) as string,
		validatorShareProxyAddress: searchInput(inputs, OptionInputId.maticValidatorShareProxyAddress) as string,
		amountMatic: searchInput(inputs, OptionInputId.maticBuyVoucherAmount) as number,
		integration: searchInput(inputs, OptionInputId.maticIntegration) as string,
	};

	debugLog('MATIC BUY VOUCHER', params);

	try {
		const tx = await k.matic.craftBuyVoucherTx(params.accountId, params.walletAddress, params.validatorShareProxyAddress, params.amountMatic);
		const hash = await signAndBroadcast(k, sdk.integrations, params.integration, tx);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default buyVoucher;
