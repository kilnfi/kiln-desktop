import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { notes, usages, inputs, labels } from '../config';

const stake: Option = {
	id: OptionId.txAdaStake,
	label: labels[OptionId.txAdaStake],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txAdaStake],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txAdaStake],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.adaAccountId,
				...inputs[OptionInputId.adaAccountId],
				required: true,
			},
			{
				id: OptionInputId.adaWalletAddress,
				...inputs[OptionInputId.adaWalletAddress],
				required: true,
			},
			{
				id: OptionInputId.adaStakePoolId,
				...inputs[OptionInputId.adaStakePoolId],
				required: true,
			},
			{
				id: OptionInputId.adaIntegration,
				...inputs[OptionInputId.adaIntegration],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txAdaStake,
		api: undefined,
	},
};

export default stake;
