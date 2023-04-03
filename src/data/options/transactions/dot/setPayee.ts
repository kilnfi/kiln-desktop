import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const setPayee: Option = {
	id: OptionId.txDotSetPayee,
	label: labels[OptionId.txDotSetPayee],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txDotSetPayee],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txDotSetPayee],
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
        id: OptionInputId.dotRewardDestination,
        ...inputs[OptionInputId.dotRewardDestination],
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
		sdk: OptionFunctionSdk.txDotSetPayee,
		api: undefined,
	},
};

export default setPayee;
