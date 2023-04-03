import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const getStatus: Option = {
	id: OptionId.txAdaGetStatus,
	label: labels[OptionId.txAdaGetStatus],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txAdaGetStatus],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txAdaGetStatus],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.adaTransactionHash,
				...inputs[OptionInputId.adaTransactionHash],
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
