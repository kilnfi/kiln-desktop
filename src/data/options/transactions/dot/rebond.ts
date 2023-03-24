import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { accountId, amount, controllerAccount, integration, noteSignAndBroadcast } from '../common';

const rebond: Option = {
	id: OptionId.txDotRebond,
	label: 'Rebond',
	type: OptionType.SDK,
	note: {
		sdk: `First, craft a dot rebond transaction (to be used to rebond unbonding token).

${noteSignAndBroadcast('Polkadot')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftRebondTx(controllerAccount: string, amountDot: number): Promise<DotTransaction> */
const tx = await k.dot.craftRebondTx(controllerAccount, 2.4);

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
				id: OptionInputId.dotRebondAmount,
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
		sdk: OptionFunctionSdk.txDotRebond,
		api: undefined,
	},
};

export default rebond;
