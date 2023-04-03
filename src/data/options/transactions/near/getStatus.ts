import { Option, OptionId, OptionInputId, OptionType, OptionFunctionSdk } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const getStatus: Option = {
	id: OptionId.txNearGetStatus,
	label: labels[OptionId.txNearGetStatus],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txNearGetStatus],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txNearGetStatus],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.nearTransactionHash,
				...inputs[OptionInputId.nearTransactionHash],
				required: true,
			},
			{
				id: OptionInputId.nearStakePoolId,
				...inputs[OptionInputId.nearStakePoolId],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txNearGetStatus,
		api: undefined,
	},
};

export default getStatus;
