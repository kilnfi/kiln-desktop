import { setupSdk, searchInput, logInfo, logSuccess, logError } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const withdraw = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const stakeAccountAddress = searchInput(inputs, OptionInputId.solStakeAccountAddress) as string;
	const walletAddress = searchInput(inputs, OptionInputId.solWalletAddress) as string;
  const amount = searchInput(inputs, OptionInputId.solWithdrawAmount);
	const amountSol = amount ? (amount as number) : undefined;
	const integration = searchInput(inputs, OptionInputId.solIntegration) as string;

	logInfo('>>> SOL withdraw <<<');
	logInfo(`Stake Account Address: ${stakeAccountAddress}`);
	logInfo(`Wallet Address: ${walletAddress}`);
	logInfo(`Amount in SOL: ${amountSol}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.sol.craftWithdrawStakedBalanceTx(stakeAccountAddress, walletAddress, amountSol);
		const signedTx = await k.sol.sign(integration, tx);
		const hash = await k.sol.broadcast(signedTx);
		logSuccess('>>> SOL withdraw <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> SOL withdraw <<<');
		console.error(error);
		return error;
	}
};

export default withdraw;
