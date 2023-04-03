import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const stake: Option = {
	id: OptionId.txSolStake,
	label: labels[OptionId.txSolStake],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txSolStake],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txSolStake],
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
				id: OptionInputId.solWalletAddress,
				...inputs[OptionInputId.solWalletAddress],
				required: true,
			},
			{
				id: OptionInputId.solVoteAccountAddress,
				...inputs[OptionInputId.solVoteAccountAddress],
				required: true,
			},
			{
				id: OptionInputId.solStakeAmount,
				...inputs[OptionInputId.solStakeAmount],
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
		sdk: OptionFunctionSdk.txSolStake,
		api: undefined,
	},
};

export default stake;
