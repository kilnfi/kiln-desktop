import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const nominate: Option = {
	id: OptionId.txDotNominate,
	label: labels[OptionId.txDotNominate],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txDotNominate],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txDotNominate],
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
				id: OptionInputId.dotNominatedValidatorsAddresses,
				...inputs[OptionInputId.dotNominatedValidatorsAddresses],
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
		sdk: OptionFunctionSdk.txDotNominate,
		api: undefined,
	},
};

export default nominate;
