import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const rebond: Option = {
	id: OptionId.txDotRebond,
	label: labels[OptionId.txDotRebond],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txDotRebond],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txDotRebond],
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
				id: OptionInputId.dotRebondAmount,
				...inputs[OptionInputId.dotRebondAmount],
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
		sdk: OptionFunctionSdk.txDotRebond,
		api: undefined,
	},
};

export default rebond;
