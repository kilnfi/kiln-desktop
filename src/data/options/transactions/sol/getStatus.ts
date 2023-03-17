import { Option, OptionId, OptionInputId, OptionType, OptionFunctionSdk } from '../../../../types/option';
import { transactionHash } from '../common';

const getStatus: Option = {
	id: OptionId.txSolGetStatus,
	label: 'Get status',
	type: OptionType.SDK,
	note: {
		sdk: 'Get the status of a broadcasted transaction.',
		api: undefined,
	},
	usage: {
		sdk: `/* async getTxStatus(transactionHash: string): Promise<SolTxStatus> */
const status = await k.sol.getTxStatus(hash);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.solTransactionHash,
				...transactionHash,
				type: 'text',
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txSolGetStatus,
		api: undefined,
	},
};

export default getStatus;
