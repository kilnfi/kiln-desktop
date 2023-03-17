import { setupSdk, searchInput, logInfo, logSuccess, logError } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const stake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const accountId = searchInput(inputs, OptionInputId.solAccountId) as string;
	const walletAddress = searchInput(inputs, OptionInputId.solWalletAddress) as string;
	const amountSol = searchInput(inputs, OptionInputId.solStakeAmount) as number;
	const options = JSON.parse((searchInput(inputs, OptionInputId.solOptions) || '{}') as string);
	const integration = searchInput(inputs, OptionInputId.solIntegration) as string;

	logInfo('>>> SOL stake <<<');
	logInfo(`Account ID: ${accountId}`);
	logInfo(`Wallet Address: ${walletAddress}`);
	logInfo(`Amount in SOL: ${amountSol}`);
	logInfo(`Options: ${options}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.sol.craftStakeTx(accountId, walletAddress, amountSol, options);
		const signedTx = await k.sol.sign(integration, tx);
		const hash = await k.sol.broadcast(signedTx);
		logSuccess('>>> SOL stake <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> SOL stake <<<');
		console.error(error);
		return error;
	}
};

export default stake;
