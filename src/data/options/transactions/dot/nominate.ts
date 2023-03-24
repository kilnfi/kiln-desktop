import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { controllerAccount, integration, noteSignAndBroadcast } from '../common';

const nominate: Option = {
	id: OptionId.txDotNominate,
	label: 'Nominate',
	type: OptionType.SDK,
	note: {
		sdk: `First, craft a dot nominate transaction.

${noteSignAndBroadcast('Polkadot')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftNominateTx(controllerAccount: string, validatorAddresses?: string[]): Promise<DotTransaction> */
const tx = await k.dot.craftNominateTx(controllerAccount, validators);

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
				id: OptionInputId.dotNominateValidators,
				label: 'Nominate up to 16 validators',
				placeholder: `xxx
xxx
xxx
...`,
				details: `Choose up to 16 validators you want to nominate.

If they are elected by the protocol during an erea (each 24 hours),
and that you belong to the top 512 nominators of this validators
(ordered by the number of bonded tokens), you will earn rewards.

Enter the address of these validators separated by a new line.`,
				type: 'text-array',
				separator: '\n',
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
		sdk: OptionFunctionSdk.txDotNominate,
		api: undefined,
	},
};

export default nominate;
