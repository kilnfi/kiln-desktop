import { setupSdk, searchInput, logInfo, logError, logSuccess } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const setPayee = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const controllerAccount = searchInput(inputs, OptionInputId.dotControllerAccount) as string;
  const rewardDestination = searchInput(inputs, OptionInputId.dotRewardDestination) as string;
	const integration = searchInput(inputs, OptionInputId.dotIntegration) as string;

	logInfo('>>> DOT set payee <<<');
	logInfo(`Controller Account: ${controllerAccount}`);
	logInfo(`Rewards Destination: ${rewardDestination}`);
	logInfo(`Integration: ${integration}`);

	try {
		const tx = await k.dot.craftSetPayeeTx(controllerAccount, rewardDestination);
		const signedTx = await k.dot.sign(integration, tx);
		const hash = await k.dot.broadcast(signedTx);
		logSuccess('>>> DOT set payee <<<');
		console.log(hash);
		return JSON.stringify(hash, undefined, 4);
	} catch (error) {
		logError('>>> DOT set payee <<<');
		console.error(error);
		return error;
	}
};

export default setPayee;
