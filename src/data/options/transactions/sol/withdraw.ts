import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { inputs, labels, notes, usages } from '../config';

const withdraw: Option = {
	id: OptionId.txSolWithdraw,
	label: labels[OptionId.txSolWithdraw],
	type: OptionType.sdk,
	note: {
		sdk: notes[OptionId.txSolWithdraw],
		api: undefined,
	},
	usage: {
		sdk: usages[OptionId.txSolWithdraw],
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.solStakeAccountAddress,
				...inputs[OptionInputId.solStakeAccountAddress],
				required: true,
			},
			{
				id: OptionInputId.solWalletAddress,
				...inputs[OptionInputId.solWalletAddress],
				required: true,
			},
			{
				id: OptionInputId.solWithdrawAmount,
				...inputs[OptionInputId.solWithdrawAmount],
				required: false,
			},
			{
				id: OptionInputId.solIntegration,
				...inputs[OptionInputId.solIntegration],
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txSolWithdraw,
		api: undefined,
	},
};

export default withdraw;
