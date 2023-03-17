import { setupSdk, searchInput, logInfo, logError, logSuccess } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const stake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const accountId = searchInput(inputs, OptionInputId.atomAccountId) as string;
	const walletAddress = searchInput(inputs, OptionInputId.atomWalletAddress) as string;
	const amountAtom = searchInput(inputs, OptionInputId.atomStakeAmount) as number;
	const options = JSON.parse((searchInput(inputs, OptionInputId.atomOptions) || '{}') as string);
	const integration = searchInput(inputs, OptionInputId.atomIntegration) as string;

	logInfo('>>> ATOM stake <<<');
	logInfo(`Account ID: ${accountId}`);
	logInfo(`Wallet Address: ${walletAddress}`);
	logInfo(`Amount in ATOM: ${amountAtom}`);
	logInfo(`Options: ${options}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.atom.craftStakeTx(accountId, walletAddress, amountAtom, options);
		const signedTx = await k.atom.sign(integration, tx);
		const hash = await k.atom.broadcast(signedTx);
		logSuccess('>>> ATOM stake <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> ATOM stake <<<');
		console.error(error);
		return error;
	}
};

export default stake;
