import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { notes, usages, inputs, labels } from '../config';

const unstake: Option = {
	id: OptionId.txXtzUnstake,
	label: labels[OptionId.txXtzUnstake],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txXtzUnstake],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txXtzUnstake],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.xtzWalletAddress,
				...inputs[OptionInputId.xtzWalletAddress],
				required: true,
			},
			{
				id: OptionInputId.xtzIntegration,
				...inputs[OptionInputId.xtzIntegration],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txXtzUnstake,
		api: undefined,
	},
};

export default unstake;
