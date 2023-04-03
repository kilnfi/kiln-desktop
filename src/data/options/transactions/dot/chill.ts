import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const chill: Option = {
	id: OptionId.txDotChill,
	label: labels[OptionId.txDotChill],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txDotChill],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txDotChill],
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
		sdk: OptionFunctionSdk.txDotChill,
		api: undefined,
	},
};

export default chill;
