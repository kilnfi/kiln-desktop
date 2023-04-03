import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const setController: Option = {
	id: OptionId.txDotSetController,
	label: labels[OptionId.txDotSetController],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txDotSetController],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txDotSetController],
		api: undefined,
	},
	inputs: {
		sdk: [
      {
				id: OptionInputId.dotStashAccountAddress,
				...inputs[OptionInputId.dotStashAccountAddress],
				required: true,
			},
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
		sdk: OptionFunctionSdk.txDotSetController,
		api: undefined,
	},
};

export default setController;
