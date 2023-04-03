import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const unstake: Option = {
	id: OptionId.txAtomUnstake,
	label: labels[OptionId.txAtomUnstake],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txAtomUnstake],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txAtomUnstake],
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
				id: OptionInputId.atomUnstakeAmount,
				...inputs[OptionInputId.atomUnstakeAmount],
				required: false,
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
		sdk: OptionFunctionSdk.txAtomUnstake,
		api: undefined,
	},
};

export default unstake;
