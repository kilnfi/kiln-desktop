import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const withdrawUnbonded: Option = {
	id: OptionId.txDotWithdrawUnbonded,
	label: labels[OptionId.txDotWithdrawUnbonded],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txDotWithdrawUnbonded],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txDotWithdrawUnbonded],
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
		sdk: OptionFunctionSdk.txDotWithdrawUnbonded,
		api: undefined,
	},
};

export default withdrawUnbonded;
