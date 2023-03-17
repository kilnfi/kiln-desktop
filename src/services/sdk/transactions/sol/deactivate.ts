import { setupSdk, searchInput, logInfo, logSuccess, logError } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const deactivate = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const stakeAccountAddress = searchInput(inputs, OptionInputId.solStakeAccountAddress) as string;
	const walletAddress = searchInput(inputs, OptionInputId.solWalletAddress) as string;
	const integration = searchInput(inputs, OptionInputId.solIntegration) as string;

	logInfo('>>> SOL deactivate <<<');
	logInfo(`Stake Account Address: ${stakeAccountAddress}`);
	logInfo(`Wallet Address: ${walletAddress}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.sol.craftDeactivateStakeTx(stakeAccountAddress, walletAddress);
		const signedTx = await k.sol.sign(integration, tx);
		const hash = await k.sol.broadcast(signedTx);
		logSuccess('>>> SOL deactivate <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> SOL deactivate <<<');
		console.error(error);
		return error;
	}
};

export default deactivate;
