import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const split: Option = {
	id: OptionId.txSolSplit,
	label: labels[OptionId.txSolSplit],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txSolSplit],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txSolSplit],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.solAccountId,
				...inputs[OptionInputId.solAccountId],
				required: true,
			},
			{
				id: OptionInputId.solStakeAccountAddress,
				...inputs[OptionInputId.solStakeAccountAddress],
				required: true,
			},
			{
				id: OptionInputId.solWalletAddress,
				...inputs[OptionInputId.solWalletAddress],
				required: true,
			},
			{
				id: OptionInputId.solSplitAmount,
				...inputs[OptionInputId.solSplitAmount],
				required: true,
			},
			{
				id: OptionInputId.solIntegration,
				...inputs[OptionInputId.solIntegration],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txSolSplit,
		api: undefined,
	},
};

export default split;
