import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { notes, usages, inputs, labels } from '../config';

const unstake: Option = {
	id: OptionId.txXtzGetStatus,
	label: labels[OptionId.txXtzGetStatus],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txXtzGetStatus],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txXtzGetStatus],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.xtzBlockNumber,
				...inputs[OptionInputId.xtzBlockNumber],
				required: true,
			},
			{
				id: OptionInputId.xtzTransactionHash,
				...inputs[OptionInputId.xtzTransactionHash],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txXtzGetStatus,
		api: undefined,
	},
};

export default unstake;
