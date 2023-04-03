import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const getStatus: Option = {
	id: OptionId.txDotGetStatus,
	label: labels[OptionId.txDotGetStatus],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txDotGetStatus],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txDotGetStatus],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.dotTransactionHash,
				...inputs[OptionInputId.dotTransactionHash],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txDotGetStatus,
		api: undefined,
	},
};

export default getStatus;
