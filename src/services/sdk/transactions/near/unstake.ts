import { setupSdk, searchInput, logInfo, logError, logSuccess } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const unstake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const walletAddress = searchInput(inputs, OptionInputId.nearWalletAddress) as string;
	const stakePoolId = searchInput(inputs, OptionInputId.nearStakePoolId) as string;
	const amount = searchInput(inputs, OptionInputId.nearUnstakeAmount);
	const amountNear = amount ? (amount as number) : undefined;
	const integration = searchInput(inputs, OptionInputId.nearIntegration) as string;

	logInfo('>>> NEAR unstake <<<');
	logInfo(`Wallet Address: ${walletAddress}`);
	logInfo(`Stake pool ID: ${stakePoolId}`);
	logInfo(`Amount in NEAR: ${amountNear}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.near.craftUnstakeTx(walletAddress, stakePoolId, amountNear);
		const signedTx = await k.near.sign(integration, tx);
		const hash = await k.near.broadcast(signedTx);
		logSuccess('>>> NEAR unstake <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> NEAR unstake <<<');
		console.error(error);
		return error;
	}
};

export default unstake;
