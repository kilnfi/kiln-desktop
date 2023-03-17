import { setupSdk, searchInput, logInfo, logSuccess, logError } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const stake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const accountId = searchInput(inputs, OptionInputId.adaAccountId) as string;
	const walletAddress = searchInput(inputs, OptionInputId.adaWalletAddress) as string;
	const options = JSON.parse((searchInput(inputs, OptionInputId.adaOptions) || '{}') as string);
	const integration = searchInput(inputs, OptionInputId.adaIntegration) as string;

	logInfo('>>> ADA stake <<<');
	logInfo(`Account ID: ${accountId}`);
	logInfo(`Wallet Address: ${walletAddress}`);
	logInfo(`Options: ${options}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.ada.craftStakeTx(accountId, walletAddress, options);
		const signedTx = await k.ada.sign(integration, tx);
		const hash = await k.ada.broadcast(signedTx);
		logSuccess('>>> ADA stake <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> ADA stake <<<');
		console.error(error);
		return error;
	}
};

export default stake;
