import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const withdrawRewards: Option = {
	id: OptionId.txAdaWithdrawRewards,
	label: labels[OptionId.txAdaWithdrawRewards],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txAdaWithdrawRewards],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txAdaWithdrawRewards],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.adaWalletAddress,
				...inputs[OptionInputId.adaWalletAddress],
				required: true,
			},
			{
				id: OptionInputId.adaWithdrawRewardsAmount,
				...inputs[OptionInputId.adaWithdrawRewardsAmount],
				required: false,
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
		sdk: OptionFunctionSdk.txAdaWithdrawRewards,
		api: undefined,
	},
};

export default withdrawRewards;
