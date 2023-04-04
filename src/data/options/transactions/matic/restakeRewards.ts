import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const restakeRewards: Option = {
	id: OptionId.txMaticRestakeRewards,
	label: labels[OptionId.txMaticRestakeRewards],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txMaticRestakeRewards],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txMaticRestakeRewards],
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
		sdk: OptionFunctionSdk.txMaticRestakeRewards,
		api: undefined,
	},
};

export default restakeRewards;
