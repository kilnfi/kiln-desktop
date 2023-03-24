import { setupSdk, searchInput, logInfo, logError, logSuccess } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const rebond = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const controllerAccount = searchInput(inputs, OptionInputId.dotControllerAccount) as string;
	const amountDot = searchInput(inputs, OptionInputId.dotRebondAmount) as number;
	const integration = searchInput(inputs, OptionInputId.dotIntegration) as string;

	logInfo('>>> DOT rebond <<<');
	logInfo(`Controller Account: ${controllerAccount}`);
	logInfo(`Amount in DOT: ${amountDot}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.dot.craftRebondTx(controllerAccount, amountDot);
		const signedTx = await k.dot.sign(integration, tx);
		const hash = await k.dot.broadcast(signedTx);
		logSuccess('>>> DOT rebond <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> DOT rebond <<<');
		console.error(error);
		return error;
	}
};

export default rebond;
