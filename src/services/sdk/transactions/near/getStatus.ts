import { setupSdk, searchInput, debugLog } from '../../utils';
import { Sdk } from '../../../../types/sdk';
import { Input } from '../../../../types/input';
import { OptionInputId } from '../../../../types/option';

const getStatus = async (sdk: Sdk, inputs: Input[]) => {
	const k = setupSdk(sdk);

	const params = {
		transactionHash: searchInput(inputs, OptionInputId.nearTransactionHash) as string,
		poolId: searchInput(inputs, OptionInputId.nearStakePoolId) as string,
	};

	debugLog('NEAR GET STATUS', params);

	try {
		const status = await k.near.getTxStatus(params.transactionHash, params.poolId);
		return JSON.stringify(status, undefined, 4);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default getStatus;
