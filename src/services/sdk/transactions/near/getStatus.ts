import { setupSdk, searchInput, logInfo, logSuccess, logError } from '../../utils';

import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const getStatus = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const transactionHash = searchInput(inputs, OptionInputId.nearTransactionHash) as string;

	logInfo('>>> NEAR get-satuts <<<');
	logInfo(`Transaction hash: ${transactionHash}`);

	try {
		const status = await k.near.getTxStatus(transactionHash);
		logSuccess('>>> NEAR get-status <<<');
		console.log(status);
		return JSON.stringify(status, undefined, 4);
	} catch (error) {
		logError('>>> NEAR get-status <<<');
		console.error(error);
		return error;
	}
};

export default getStatus;
