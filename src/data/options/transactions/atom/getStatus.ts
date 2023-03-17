import { Option, OptionId, OptionInputId, OptionType, OptionFunctionSdk } from '../../../../types/option';
import { transactionHash } from '../common';

const getStatus: Option = {
	id: OptionId.txAtomGetStatus,
	label: 'Get status',
	type: OptionType.SDK,
	note: {
		sdk: 'Get the status of a broadcasted transaction.',
		api: undefined,
	},
	usage: {
		sdk: `/* async getTxStatus(transactionHash: string): Promise<AtomTxStatus | null> */
const status = await k.atom.getTxStatus(hash);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.atomTransactionHash,
				...transactionHash,
				type: 'text',
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txAtomGetStatus,
		api: undefined,
	},
};

export default getStatus;
