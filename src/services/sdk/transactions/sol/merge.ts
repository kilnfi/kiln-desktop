import { setupSdk, searchInput, logInfo, logSuccess, logError } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const merge = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const stakeAccountSourceAddress = searchInput(inputs, OptionInputId.solStakeAccountSourceAddress) as string;
	const stakeAccountDestinationAddress = searchInput(inputs, OptionInputId.solStakeAccountDestinationAddress) as string;
	const walletAddress = searchInput(inputs, OptionInputId.solWalletAddress) as string;
	const integration = searchInput(inputs, OptionInputId.solIntegration) as string;

	logInfo('>>> SOL merge <<<');
	logInfo(`Stake Account Source Address: ${stakeAccountSourceAddress}`);
	logInfo(`Stake Account Destination Address: ${stakeAccountDestinationAddress}`);
	logInfo(`Wallet Address: ${walletAddress}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.sol.craftMergeStakeAccountsTx(stakeAccountSourceAddress, stakeAccountDestinationAddress, walletAddress);
		const signedTx = await k.sol.sign(integration, tx);
		const hash = await k.sol.broadcast(signedTx);
		logSuccess('>>> SOL merge <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> SOL merge <<<');
		console.error(error);
		return error;
	}
};

export default merge;
