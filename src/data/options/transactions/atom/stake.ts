import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const stake: Option = {
	id: OptionId.txAtomStake,
	label: labels[OptionId.txAtomStake],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txAtomStake],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txAtomStake],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.atomAccountId,
				...inputs[OptionInputId.atomAccountId],
				required: true,
			},
			{
				id: OptionInputId.atomWalletAddress,
				...inputs[OptionInputId.atomWalletAddress],
				required: true,
			},
			{
				id: OptionInputId.atomValidatorAddress,
				...inputs[OptionInputId.atomValidatorAddress],
				required: true,
			},
			{
				id: OptionInputId.atomStakeAmount,
				...inputs[OptionInputId.atomStakeAmount],
				required: true,
			},
			{
				id: OptionInputId.atomIntegration,
				...inputs[OptionInputId.atomIntegration],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txAtomStake,
		api: undefined,
	},
};

export default stake;
