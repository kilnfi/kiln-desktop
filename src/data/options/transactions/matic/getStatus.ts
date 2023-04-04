import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const getStatus: Option = {
	id: OptionId.txMaticGetStatus,
	label: labels[OptionId.txMaticGetStatus],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txMaticGetStatus],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txMaticGetStatus],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.maticTransactionHash,
				...inputs[OptionInputId.maticTransactionHash],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txMaticGetStatus,
		api: undefined,
	},
};

export default getStatus;
