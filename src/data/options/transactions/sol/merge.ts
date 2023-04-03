import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const merge: Option = {
	id: OptionId.txSolMerge,
	label: labels[OptionId.txSolMerge],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txSolMerge],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txSolMerge],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.solStakeAccountSourceAddress,
				...inputs[OptionInputId.solStakeAccountSourceAddress],
				required: true,
			},
			{
				id: OptionInputId.solStakeAccountDestinationAddress,
				...inputs[OptionInputId.solStakeAccountDestinationAddress],
				required: true,
			},
			{
				id: OptionInputId.solWalletAddress,
				...inputs[OptionInputId.solWalletAddress],
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
		sdk: OptionFunctionSdk.txSolMerge,
		api: undefined,
	},
};

export default merge;
