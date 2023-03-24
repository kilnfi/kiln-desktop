import { setupSdk, searchInput, logInfo, logError, logSuccess } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const unbond = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const controllerAccount = searchInput(inputs, OptionInputId.dotControllerAccount) as string;
	const amountDot = searchInput(inputs, OptionInputId.dotUnbondAmount) as number;
	const integration = searchInput(inputs, OptionInputId.dotIntegration) as string;

	logInfo('>>> DOT unbond <<<');
	logInfo(`Controller Account: ${controllerAccount}`);
	logInfo(`Amount in DOT: ${amountDot}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.dot.craftUnbondTx(controllerAccount, amountDot);
		const signedTx = await k.dot.sign(integration, tx);
		const hash = await k.dot.broadcast(signedTx);
		logSuccess('>>> DOT unbond <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> DOT unbond <<<');
		console.error(error);
		return error;
	}
};

export default unbond;
