import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { accountId, amount, integration, noteSignAndBroadcast, options, stashAccount } from '../common';

const bond: Option = {
	id: OptionId.txDotBond,
	label: 'Bond',
	type: OptionType.SDK,
	note: {
		sdk: `First, craft a dot bonding transaction.

${noteSignAndBroadcast('Polkadot')}`,
		api: undefined,
	},
	usage: {
		sdk: `// optional, only for specific setups
const options = {
  controllerAccount: '...';
  rewardDestination: '...';
}; 

/* async craftBondTx(accountId: string, stashAccount: string, amountDot: number, options?: DotStakeOptions): Promise<DotTransaction> */
const tx = await k.dot.craftBondTx(account.id, stashAccount, 42.2, options);

/* async sign(integration: string, transaction: DotTransaction): Promise<SubmittableExtrinsic> */
const signed = await k.dot.sign('vault-1', tx);

/* async broadcast(transaction: SubmittableExtrinsic): Promise<SubmittedDotTransaction> */
const hash = await k.dot.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.dotAccountId,
				...accountId,
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.dotStashAccount,
				...stashAccount,
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.dotBondAmount,
				...amount('DOT', 'bond'),
				type: 'number',
				required: true,
			},
			{
				id: OptionInputId.dotOptions,
				...options(['controllerAccount', 'rewardDestination'], [
					'rewardDestination can be either "Staked", "Stash", "Controller" or any other account address.',
					'Staked: Rewards are paid into the stash account, increasing the amount at stake accordingly.',
					'Stash: Rewards are paid into the stash account, not increasing the amount at stake.',
					'Controller: Rewards are paid into the controller account.',
					'Custom account address: Rewards are paid into the custom account address.',
				]),
				type: 'json',
				required: false,
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
		sdk: OptionFunctionSdk.txDotBond,
		api: undefined,
	},
};

export default bond;
