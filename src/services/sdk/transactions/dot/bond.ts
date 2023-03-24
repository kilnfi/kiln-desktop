import { setupSdk, searchInput, logInfo, logError, logSuccess } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const bond = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const accountId = searchInput(inputs, OptionInputId.dotAccountId) as string;
	const walletAddress = searchInput(inputs, OptionInputId.dotWalletAddress) as string;
	const amountDot = searchInput(inputs, OptionInputId.dotBondAmount) as number;
	const options = JSON.parse((searchInput(inputs, OptionInputId.dotOptions) || '{}') as string);
	const integration = searchInput(inputs, OptionInputId.dotIntegration) as string;

	logInfo('>>> DOT bond <<<');
	logInfo(`Account ID: ${accountId}`);
	logInfo(`Wallet Address: ${walletAddress}`);
	logInfo(`Amount in DOT: ${amountDot}`);
	logInfo(`Options: ${options}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.dot.craftBondTx(accountId, walletAddress, amountDot, options);
		const signedTx = await k.dot.sign(integration, tx);
		const hash = await k.dot.broadcast(signedTx);
		logSuccess('>>> DOT bond <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> DOT bond <<<');
		console.error(error);
		return error;
	}
};

export default bond;
