import { setupSdk, searchInput, logInfo, logSuccess, logError } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const unstake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const walletAddress = searchInput(inputs, OptionInputId.adaWalletAddress) as string;
	const integration = searchInput(inputs, OptionInputId.adaIntegration) as string;

	logInfo('>>> ADA unstake <<<');
	logInfo(`Wallet Address: ${walletAddress}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.ada.craftUnstakeTx(walletAddress);
		const signedTx = await k.ada.sign(integration, tx);
		const hash = await k.ada.broadcast(signedTx);
		logSuccess('>>> ADA unstake <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> ADA unstake <<<');
		console.error(error);
		return error;
	}
};

export default unstake;
