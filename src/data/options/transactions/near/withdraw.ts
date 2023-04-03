import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const unstake: Option = {
	id: OptionId.txNearWithdraw,
	label: labels[OptionId.txNearWithdraw],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txNearWithdraw],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txNearWithdraw],
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
				id: OptionInputId.nearWithdrawAmount,
				...inputs[OptionInputId.nearWithdrawAmount],
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
		sdk: OptionFunctionSdk.txNearWithdraw,
		api: undefined,
	},
};

export default unstake;
