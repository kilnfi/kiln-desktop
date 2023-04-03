import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const unstake: Option = {
	id: OptionId.txAdaUnstake,
	label: labels[OptionId.txAdaUnstake],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txAdaUnstake],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txAdaUnstake],
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
				id: OptionInputId.adaIntegration,
				...inputs[OptionInputId.adaIntegration],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txAdaUnstake,
		api: undefined,
	},
};

export default unstake;
