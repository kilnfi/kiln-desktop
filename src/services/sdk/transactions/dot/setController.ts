import { setupSdk, searchInput, logInfo, logError, logSuccess } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const setController = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const stashAccount = searchInput(inputs, OptionInputId.dotStashAccount) as string;
	const controllerAccount = searchInput(inputs, OptionInputId.dotControllerAccount) as string;
	const integration = searchInput(inputs, OptionInputId.dotIntegration) as string;

	logInfo('>>> DOT set controller <<<');
	logInfo(`Stash Account: ${stashAccount}`);
	logInfo(`Controller Account: ${controllerAccount}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.dot.craftSetControllerTx(stashAccount, controllerAccount);
		const signedTx = await k.dot.sign(integration, tx);
		const hash = await k.dot.broadcast(signedTx);
		logSuccess('>>> DOT set controller <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> DOT set controller <<<');
		console.error(error);
		return error;
	}
};

export default setController;
