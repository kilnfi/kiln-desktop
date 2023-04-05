import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const approve: Option = {
	id: OptionId.txMaticApprove,
	label: labels[OptionId.txMaticApprove],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txMaticApprove],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txMaticApprove],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.maticWalletAddress,
				...inputs[OptionInputId.maticWalletAddress],
				required: true,
			},
			{
				id: OptionInputId.maticContractAddressToApprove,
				...inputs[OptionInputId.maticContractAddressToApprove],
				required: true,
			},
			{
				id: OptionInputId.maticApproveAmount,
				...inputs[OptionInputId.maticApproveAmount],
				required: false,
			},
			{
				id: OptionInputId.maticIntegration,
				...inputs[OptionInputId.maticIntegration],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txMaticApprove,
		api: undefined,
	},
};

export default approve;
