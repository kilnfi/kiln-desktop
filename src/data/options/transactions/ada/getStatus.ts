import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { transactionHash } from '../common';

const getStatus: Option = {
	id: OptionId.txAdaGetStatus,
	label: 'Get status',
	type: OptionType.SDK,
	note: {
		sdk: 'Get the status of a broadcasted transaction.',
		api: undefined,
	},
	usage: {
		sdk: `/* async getTxStatus(transactionHash: string): Promise<AdaTxStatus> */
const status = await k.ada.getTxStatus(hash);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.adaTransactionHash,
				...transactionHash,
				type: 'text',
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txAdaGetStatus,
		api: undefined,
	},
};

export default getStatus;
