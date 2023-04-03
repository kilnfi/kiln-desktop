import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const extraBond: Option = {
	id: OptionId.txDotExtraBond,
	label: labels[OptionId.txDotExtraBond],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txDotExtraBond],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txDotExtraBond],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.dotStashAccountAddress,
				...inputs[OptionInputId.dotStashAccountAddress],
				required: true,
			},
			{
				id: OptionInputId.dotExtraBondAmount,
				...inputs[OptionInputId.dotExtraBondAmount],
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
		sdk: OptionFunctionSdk.txDotExtraBond,
		api: undefined,
	},
};

export default extraBond;
