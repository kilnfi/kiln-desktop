import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const getStatus = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		transactionHash: searchInput(inputs, OptionInputId.solTransactionHash) as string,
	};

	debugLog('SOL GET STATUS', params);

	try {
		const status = await k.sol.getTxStatus(params.transactionHash);
		return JSON.stringify(status, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default getStatus;
