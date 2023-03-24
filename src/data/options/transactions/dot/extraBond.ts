import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { amount, integration, noteSignAndBroadcast, stashAccount } from '../common';

const extraBond: Option = {
	id: OptionId.txDotExtraBond,
	label: 'Extra Bond',
	type: OptionType.SDK,
	note: {
		sdk: `First, craft dot bonding extra token transaction (to be used if you already bonded tokens).

${noteSignAndBroadcast('Polkadot')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftBondExtraTx(stashAccount: string, amountDot: number): Promise<DotTransaction> */
const tx = await k.dot.craftBondExtraTx(stashAccount, 2.4);

/* async sign(integration: string, transaction: DotTransaction): Promise<SubmittableExtrinsic> */
const signed = await k.dot.sign('vault-1', tx);

/* async broadcast(transaction: SubmittableExtrinsic): Promise<SubmittedDotTransaction> */
const hash = await k.dot.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.dotStashAccount,
				...stashAccount,
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.dotExtraBondAmount,
				...amount('DOT', 'extra bond'),
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
		sdk: OptionFunctionSdk.txDotExtraBond,
		api: undefined,
	},
};

export default extraBond;
