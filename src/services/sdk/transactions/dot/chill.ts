import { setupSdk, searchInput, logInfo, logError, logSuccess } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const chill = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const controllerAccount = searchInput(inputs, OptionInputId.dotControllerAccount) as string;
	const integration = searchInput(inputs, OptionInputId.dotIntegration) as string;

	logInfo('>>> DOT chill <<<');
	logInfo(`Controller Account: ${controllerAccount}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.dot.craftChillTx(controllerAccount);
		const signedTx = await k.dot.sign(integration, tx);
		const hash = await k.dot.broadcast(signedTx);
		logSuccess('>>> DOT chill <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> DOT chill <<<');
		console.error(error);
		return error;
	}
};

export default chill;
