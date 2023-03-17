import { setupSdk, searchInput, logInfo, logError, logSuccess } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const unstake = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const walletAddress = searchInput(inputs, OptionInputId.atomWalletAddress) as string;
	const validatorAddress = searchInput(inputs, OptionInputId.atomValidatorAddress) as string;
	const amount = searchInput(inputs, OptionInputId.atomUnstakeAmount);
	const amountAtom = amount ? (amount as number) : undefined;
	const integration = searchInput(inputs, OptionInputId.atomIntegration) as string;

	logInfo('>>> ATOM unstake <<<');
	logInfo(`Wallet Address: ${walletAddress}`);
	logInfo(`Validator Address: ${validatorAddress}`);
	logInfo(`Amount in ATOM: ${amountAtom}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.atom.craftUnstakeTx(walletAddress, validatorAddress, amountAtom);
		const signedTx = await k.atom.sign(integration, tx);
		const hash = await k.atom.broadcast(signedTx);
		logSuccess('>>> ATOM unstake <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> ATOM unstake <<<');
		console.error(error);
		return error;
	}
};

export default unstake;
