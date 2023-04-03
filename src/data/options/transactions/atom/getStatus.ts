import { Option, OptionId, OptionInputId, OptionType, OptionFunctionSdk } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const getStatus: Option = {
	id: OptionId.txAtomGetStatus,
	label: labels[OptionId.txAtomGetStatus],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txAtomGetStatus],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txAtomGetStatus],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.atomTransactionHash,
				...inputs[OptionInputId.atomTransactionHash],
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
