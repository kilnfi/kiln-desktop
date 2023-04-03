import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const unbond: Option = {
	id: OptionId.txDotUnbond,
	label: labels[OptionId.txDotUnbond],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txDotUnbond],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txDotUnbond],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.dotControllerAccountAddress,
				...inputs[OptionInputId.dotControllerAccountAddress],
				required: true,
			},
			{
				id: OptionInputId.dotUnbondAmount,
				...inputs[OptionInputId.dotUnbondAmount],
				required: true,
			},
			{
				id: OptionInputId.dotIntegration,
				...inputs[OptionInputId.dotIntegration],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txDotUnbond,
		api: undefined,
	},
};

export default unbond;
