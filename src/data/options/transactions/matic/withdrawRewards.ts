import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const withdrawRewards: Option = {
	id: OptionId.txMaticWithdrawRewards,
	label: labels[OptionId.txMaticWithdrawRewards],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txMaticWithdrawRewards],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txMaticWithdrawRewards],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.maticWalletAddress,
				...inputs[OptionInputId.maticWalletAddress],
				required: true,
			},
			{
				id: OptionInputId.maticValidatorShareProxyAddress,
				...inputs[OptionInputId.maticValidatorShareProxyAddress],
				required: true,
			},
			{
				id: OptionInputId.maticIntegration,
				...inputs[OptionInputId.maticIntegration],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txMaticWithdrawRewards,
		api: undefined,
	},
};

export default withdrawRewards;
