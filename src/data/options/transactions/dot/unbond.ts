import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { amount, controllerAccount, integration, noteSignAndBroadcast } from '../common';

const unbond: Option = {
	id: OptionId.txDotUnbond,
	label: 'Unbond',
	type: OptionType.SDK,
	note: {
		sdk: `First, craft a dot unbonding transaction. Note there is an unbonding period of 28 days before your tokens can be withdrawn.

${noteSignAndBroadcast('Polkadot')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftUnbondTx(controllerAccount: string, amountDot: number): Promise<DotTransaction> */
const tx = await k.dot.craftUnbondTx(controllerAccount, amountDot);

/* async sign(integration: string, transaction: DotTransaction): Promise<SubmittableExtrinsic> */
const signed = await k.dot.sign('vault-1', tx);

/* async broadcast(transaction: SubmittableExtrinsic): Promise<SubmittedDotTransaction> */
const hash = await k.dot.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.dotControllerAccount,
				...controllerAccount,
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.dotUnbondAmount,
				...amount('DOT', 'rebond'),
				type: 'number',
				required: true,
			},
			{
				id: OptionInputId.dotIntegration,
				...integration,
				type: 'text',
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txDotUnbond,
		api: undefined,
	},
};

export default unbond;
