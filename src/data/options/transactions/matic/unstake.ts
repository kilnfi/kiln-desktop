import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const unstake: Option = {
	id: OptionId.txMaticUnstake,
	label: labels[OptionId.txMaticUnstake],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txMaticUnstake],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txMaticUnstake],
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
		sdk: OptionFunctionSdk.txMaticUnstake,
		api: undefined,
	},
};

export default unstake;
