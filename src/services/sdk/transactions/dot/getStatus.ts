import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const getStatus = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		transactionHash: searchInput(inputs, OptionInputId.dotTransactionHash) as string,
    blockHash: searchInput(inputs, OptionInputId.dotBlockHash) as string,
	};

	debugLog('DOT GET STATUS', params);

	try {
		const status = await k.dot.getTxStatus(params.transactionHash, params.blockHash);
		return JSON.stringify(status, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default getStatus;
