import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const bondExtra: Option = {
	id: OptionId.txDotBondExtra,
	label: labels[OptionId.txDotBondExtra],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txDotBondExtra],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txDotBondExtra],
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
				id: OptionInputId.dotBondExtraAmount,
				...inputs[OptionInputId.dotBondExtraAmount],
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
		sdk: OptionFunctionSdk.txDotBondExtra,
		api: undefined,
	},
};

export default bondExtra;
