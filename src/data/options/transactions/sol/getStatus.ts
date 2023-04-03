import { Option, OptionId, OptionInputId, OptionType, OptionFunctionSdk } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const getStatus: Option = {
	id: OptionId.txSolGetStatus,
	label: labels[OptionId.txSolGetStatus],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txSolGetStatus],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txSolGetStatus],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.solTransactionHash,
				...inputs[OptionInputId.solTransactionHash],
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
