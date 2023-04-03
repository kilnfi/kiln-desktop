import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const stake: Option = {
	id: OptionId.txNearStake,
	label: labels[OptionId.txNearStake],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txNearStake],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txNearStake],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.nearAccountId,
				...inputs[OptionInputId.nearAccountId],
				required: true,
			},
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
				id: OptionInputId.nearStakeAmount,
				...inputs[OptionInputId.nearStakeAmount],
				required: true,
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
		sdk: OptionFunctionSdk.txNearStake,
		api: undefined,
	},
};

export default stake;
