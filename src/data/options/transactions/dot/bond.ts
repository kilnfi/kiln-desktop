import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const bond: Option = {
	id: OptionId.txDotBond,
	label: labels[OptionId.txDotBond],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txDotBond],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txDotBond],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.dotAccountId,
				...inputs[OptionInputId.dotAccountId],
				required: true,
			},
			{
				id: OptionInputId.dotStashAccountAddress,
				...inputs[OptionInputId.dotStashAccountAddress],
				required: true,
			},
			{
				id: OptionInputId.dotBondAmount,
				...inputs[OptionInputId.dotBondAmount],
				required: true,
			},
			{
				id: OptionInputId.dotOptions,
				...inputs[OptionInputId.dotOptions],
				required: false,
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
		sdk: OptionFunctionSdk.txDotBond,
		api: undefined,
	},
};

export default bond;
