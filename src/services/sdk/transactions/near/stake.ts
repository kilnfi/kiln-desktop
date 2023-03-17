import { setupSdk, searchInput, logInfo, logError, logSuccess } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const stake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const accountId = searchInput(inputs, OptionInputId.nearAccountId) as string;
	const walletAddress = searchInput(inputs, OptionInputId.nearWalletAddress) as string;
	const amountNear = searchInput(inputs, OptionInputId.nearStakeAmount) as number;
	const options = JSON.parse((searchInput(inputs, OptionInputId.nearOptions) || '{}') as string);
	const integration = searchInput(inputs, OptionInputId.nearIntegration) as string;

	logInfo('>>> NEAR stake <<<');
	logInfo(`Account ID: ${accountId}`);
	logInfo(`Wallet Address: ${walletAddress}`);
	logInfo(`Amount in NEAR: ${amountNear}`);
	logInfo(`Options: ${options}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.near.craftStakeTx(accountId, walletAddress, amountNear, options);
		const signedTx = await k.near.sign(integration, tx);
		const hash = await k.near.broadcast(signedTx);
		logSuccess('>>> NEAR stake <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> NEAR stake <<<');
		console.error(error);
		return error;
	}
};

export default stake;
