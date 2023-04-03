import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, usages } from '../config';

const deactivate: Option = {
	id: OptionId.txSolDeactivate,
	label: labels[OptionId.txSolDeactivate],
	type: OptionType.sdk,
	note: {
		sdk: labels[OptionId.txSolDeactivate],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txSolDeactivate],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.solStakeAccountAddress,
				...inputs[OptionInputId.solStakeAccountAddress],
				required: true,
			},
			{
				id: OptionInputId.solWalletAddress,
				...inputs[OptionInputId.solWalletAddress],
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
		sdk: OptionFunctionSdk.txSolDeactivate,
		api: undefined,
	},
};

export default deactivate;
