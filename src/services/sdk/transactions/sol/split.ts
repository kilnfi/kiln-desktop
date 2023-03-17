import { setupSdk, searchInput, logInfo, logSuccess, logError } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const split = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

  const accountId = searchInput(inputs, OptionInputId.solAccountId) as string;
	const stakeAccountAddress = searchInput(inputs, OptionInputId.solStakeAccountAddress) as string;
	const walletAddress = searchInput(inputs, OptionInputId.solWalletAddress) as string;
  const amountSol = searchInput(inputs, OptionInputId.solSplitAmount) as number;
	const integration = searchInput(inputs, OptionInputId.solIntegration) as string;

	logInfo('>>> SOL split <<<');
	logInfo(`Account ID: ${accountId}`);
	logInfo(`Stake Account Address: ${stakeAccountAddress}`);
	logInfo(`Wallet Address: ${walletAddress}`);
	logInfo(`Amount in SOL: ${amountSol}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.sol.craftSplitStakeAccountTx(accountId, stakeAccountAddress, walletAddress, amountSol);
		const signedTx = await k.sol.sign(integration, tx);
		const hash = await k.sol.broadcast(signedTx);
		logSuccess('>>> SOL split <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> SOL split <<<');
		console.error(error);
		return error;
	}
};

export default split;
