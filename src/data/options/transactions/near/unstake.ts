import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const unstake: Option = {
	id: OptionId.txNearUnstake,
	label: labels[OptionId.txNearUnstake],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txNearUnstake],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txNearUnstake],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.nearWalletAddress,
				...inputs[OptionInputId.nearWalletAddress],
				required: true,
			},
			{
				id: OptionInputId.nearStakePoolId,
				...inputs[OptionInputId.nearStakePoolId],
				required: true,
			},
			{
				id: OptionInputId.nearUnstakeAmount,
				...inputs[OptionInputId.nearUnstakeAmount],
				required: false,
			},
			{
				id: OptionInputId.nearIntegration,
				...inputs[OptionInputId.nearIntegration],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txNearUnstake,
		api: undefined,
	},
};

export default unstake;
