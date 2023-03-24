import { setupSdk, searchInput, logInfo, logError, logSuccess } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const extraBond = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const stashAccount = searchInput(inputs, OptionInputId.dotStashAccount) as string;
	const amountDot = searchInput(inputs, OptionInputId.dotBondAmount) as number;
	const integration = searchInput(inputs, OptionInputId.dotIntegration) as string;

	logInfo('>>> DOT extra bond <<<');
	logInfo(`Stash Account: ${stashAccount}`);
	logInfo(`Amount in DOT: ${amountDot}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.dot.craftBondExtraTx(stashAccount, amountDot);
		const signedTx = await k.dot.sign(integration, tx);
		const hash = await k.dot.broadcast(signedTx);
		logSuccess('>>> DOT extra bond <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> DOT extra bond <<<');
		console.error(error);
		return error;
	}
};

export default extraBond;
