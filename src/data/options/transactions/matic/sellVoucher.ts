import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const sellVoucher: Option = {
	id: OptionId.txMaticSellVoucher,
	label: labels[OptionId.txMaticSellVoucher],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txMaticSellVoucher],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txMaticSellVoucher],
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
				id: OptionInputId.maticValidatorShareProxyAddress,
				...inputs[OptionInputId.maticValidatorShareProxyAddress],
				required: true,
			},
			{
				id: OptionInputId.maticSellVoucherAmount,
				...inputs[OptionInputId.maticSellVoucherAmount],
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
		sdk: OptionFunctionSdk.txMaticSellVoucher,
		api: undefined,
	},
};

export default sellVoucher;
