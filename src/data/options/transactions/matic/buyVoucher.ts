import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const buyVoucher: Option = {
	id: OptionId.txMaticBuyVoucher,
	label: labels[OptionId.txMaticBuyVoucher],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txMaticBuyVoucher],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txMaticBuyVoucher],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.maticAccountId,
				...inputs[OptionInputId.maticAccountId],
				required: true,
			},
			{
				id: OptionInputId.maticWalletAddress,
				...inputs[OptionInputId.maticWalletAddress],
				required: true,
			},
			{
				id: OptionInputId.maticValidatorShareProxyAddress,
				...inputs[OptionInputId.maticValidatorShareProxyAddress],
				required: true,
			},
			{
				id: OptionInputId.maticBuyVoucherAmount,
				...inputs[OptionInputId.maticBuyVoucherAmount],
				required: true,
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
		sdk: OptionFunctionSdk.txMaticBuyVoucher,
		api: undefined,
	},
};

export default buyVoucher;
