import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const withdraw: Option = {
	id: OptionId.txDotWithdraw,
	label: labels[OptionId.txDotWithdraw],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txDotWithdraw],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txDotWithdraw],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.dotControllerAccountAddress,
				...inputs[OptionInputId.dotControllerAccountAddress],
				required: true,
			},
			{
				id: OptionInputId.dotIntegration,
				...inputs[OptionInputId.dotIntegration],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txDotWithdraw,
		api: undefined,
	},
};

export default withdraw;
