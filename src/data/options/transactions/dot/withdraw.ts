import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { controllerAccount, integration, noteSignAndBroadcast } from '../common';

const withdraw: Option = {
	id: OptionId.txDotWithdraw,
	label: 'Withdraw',
	type: OptionType.SDK,
	note: {
		sdk: `First, craft a dot withdraw unbonded token transaction.

${noteSignAndBroadcast('Polkadot')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftWithdrawUnbondedTx(controllerAccount: string): Promise<DotTransaction> */
const tx = await k.dot.craftWithdrawUnbondedTx(controllerAccount);

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
				id: OptionInputId.dotIntegration,
				...integration,
				type: 'text',
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txDotWithdraw,
		api: undefined,
	},
};

export default withdraw;
