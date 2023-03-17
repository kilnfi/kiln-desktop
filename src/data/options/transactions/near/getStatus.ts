import { Option, OptionId, OptionInputId, OptionType, OptionFunctionSdk } from '../../../../types/option';
import { transactionHash } from '../common';

const getStatus: Option = {
	id: OptionId.txNearGetStatus,
	label: 'Get status',
	type: OptionType.SDK,
	note: {
		sdk: 'Get the status of a broadcasted transaction.',
		api: undefined,
	},
	usage: {
		sdk: `/* async getTxStatus(transactionHash: string): Promise<NearTxStatus> */
const status = await k.near.getTxStatus(hash);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.nearTransactionHash,
				...transactionHash,
				type: 'text',
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txNearGetStatus,
		api: undefined,
	},
};

export default getStatus;
