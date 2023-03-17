import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { amount, integration, noteSignAndBroadcast, walletAddress } from '../common';

const unstake: Option = {
	id: OptionId.txNearUnstake,
	label: 'Unstake',
	type: OptionType.SDK,
	note: {
		sdk: `First, create an unstaking transaction to undelegate any amount of NEAR from a staking pool.
		
${noteSignAndBroadcast('Near')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftUnstakeTx(walletId: string, stakePoolId: string, amountNear?: number): Promise<Transaction> */
const tx = await k.near.craftUnstakeTx(WALLET_PUBKEY, poolId, 12.3);

/* async sign(integration: string, transaction: Transaction, note?: string): Promise<SignedTransaction> */
const signed = await k.near.sign('vault-1', tx);

/* async broadcast(transaction: SignedTransaction): Promise<string | undefined> */
const hash = await k.near.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.nearWalletAddress,
				...walletAddress('NEAR'),
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.nearStakePoolId,
				label: 'Stake pool ID',
				details: `Stake pool ID you want to unstake from.
Kiln's pool ID is kiln-1.poolv1.near.`,
				placeholder: 'kiln-1.poolv1.near',
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.nearUnstakeAmount,
				...amount('NEAR', 'unstake', 'If empty, the whole stake will be unstaked.', false),
				type: 'number',
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
		sdk: OptionFunctionSdk.txNearUnstake,
		api: undefined,
	},
};

export default unstake;
