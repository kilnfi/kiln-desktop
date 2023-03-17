import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { accountId, amount, integration, noteSignAndBroadcast, walletAddress } from '../common';

const stake: Option = {
	id: OptionId.txNearStake,
	label: 'Stake',
	type: OptionType.SDK,
	note: {
		sdk: `First, create a staking transaction to delegate any amount of NEAR to a staking pool.

${noteSignAndBroadcast('Near')}`,
		api: undefined,
	},
	usage: {
		sdk: `// optional, only for specific setups
const options = {
  // use an other pool than Kiln's
  stakePoolId: '...';
};

/* async craftStakeTx(accountId: string, walletId: string, amountNear: number, options?: NearStakeOptions): Promise<Transaction> */
const tx = await k.near.craftStakeTx(account.id, WALLET_PUBKEY, 12.3, options);

/* async sign(integration: string, transaction: Transaction, note?: string): Promise<SignedTransaction> */
const signed = await k.near.sign('vault-1', tx);

/* async broadcast(transaction: SignedTransaction): Promise<string | undefined> */
const hash = await k.near.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.nearAccountId,
				...accountId,
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.nearWalletAddress,
				...walletAddress('NEAR'),
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.nearStakeAmount,
				...amount('NEAR', 'stake'),
				type: 'number',
				required: true,
			},
			{
				id: OptionInputId.nearOptions,
				label: 'Options',
				details: `Optional. Only for specific setups.

Don't forget to:
- put the key stakePoolId between quotes.
- not put a comma after its value.`,
				placeholder: `{
	"stakePoolId": "..."
}`,
				type: 'json',
				required: false,
			},
			{
				id: OptionInputId.nearIntegration,
				...integration,
				type: 'text',
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txNearStake,
		api: undefined,
	},
};

export default stake;
