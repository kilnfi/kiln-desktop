import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { controllerAccount, integration, noteSignAndBroadcast, stashAccount } from '../common';

const setController: Option = {
	id: OptionId.txDotSetController,
	label: 'Set Controller',
	type: OptionType.SDK,
	note: {
		sdk: `First, craft a dot set controller transaction that updates the controller for the given stash account.

${noteSignAndBroadcast('Polkadot')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftSetControllerTx(stashAccount: string, controllerAccount: string): Promise<DotTransaction> */
const tx = await k.dot.craftSetControllerTx(stashAccount, controllerAccount);

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
		sdk: OptionFunctionSdk.txDotSetController,
		api: undefined,
	},
};

export default setController;
