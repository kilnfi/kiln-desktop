import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const withdrawRewards: Option = {
	id: OptionId.txAtomWithdrawRewards,
	label: labels[OptionId.txAtomWithdrawRewards],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txAtomWithdrawRewards],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txAtomWithdrawRewards],
		api: undefined,
	},
	inputs: {
		sdk: [
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
				id: OptionInputId.atomIntegration,
				...inputs[OptionInputId.atomIntegration],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txAtomWithdrawRewards,
		api: undefined,
	},
};

export default withdrawRewards;
