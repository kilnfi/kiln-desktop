import { setupSdk, searchInput, logInfo, logError, logSuccess } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const nominate = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const controllerAccount = searchInput(inputs, OptionInputId.dotControllerAccount) as string;
	const validators = searchInput(inputs, OptionInputId.dotNominateValidators) as string[];
	const integration = searchInput(inputs, OptionInputId.dotIntegration) as string;

	logInfo('>>> DOT nominate <<<');
	logInfo(`Controller Account: ${controllerAccount}`);
	logInfo(`Nominated validators: ${validators}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.dot.craftNominateTx(controllerAccount, validators);
		const signedTx = await k.dot.sign(integration, tx);
		const hash = await k.dot.broadcast(signedTx);
		logSuccess('>>> DOT nominate <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> DOT nominate <<<');
		console.error(error);
		return error;
	}
};

export default nominate;
