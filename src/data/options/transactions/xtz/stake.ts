import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { notes, usages, inputs, labels } from '../config';

const stake: Option = {
	id: OptionId.txXtzStake,
	label: labels[OptionId.txXtzStake],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txXtzStake],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txXtzStake],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.xtzAccountId,
				...inputs[OptionInputId.xtzAccountId],
				required: true,
			},
			{
				id: OptionInputId.xtzWalletAddress,
				...inputs[OptionInputId.xtzWalletAddress],
				required: true,
			},
			{
				id: OptionInputId.xtzBakerAddress,
				...inputs[OptionInputId.xtzBakerAddress],
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
		sdk: OptionFunctionSdk.txXtzStake,
		api: undefined,
	},
};

export default stake;
