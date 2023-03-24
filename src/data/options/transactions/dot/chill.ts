import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { controllerAccount, integration, noteSignAndBroadcast } from '../common';

const chill: Option = {
	id: OptionId.txDotChill,
	label: 'Chill',
	type: OptionType.SDK,
	note: {
		sdk: `First, craft a dot chill transaction. I will chill the controller account associated to the given stash account, meaning that given account will not nominate any validator anymore.
So you will stop earning rewards at the beginning of the next era.

${noteSignAndBroadcast('Polkadot')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftChillTx(controllerAccount: string): Promise<DotTransaction> */
const tx = await k.dot.craftChillTx(controllerAccount);

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
		sdk: OptionFunctionSdk.txDotChill,
		api: undefined,
	},
};

export default chill;
