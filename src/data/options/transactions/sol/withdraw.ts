import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { walletAddress, integration, stakeAccountAddress, amount, noteSignAndBroadcast } from '../common';

const withdraw: Option = {
	id: OptionId.txSolWithdraw,
	label: 'Withdraw',
	type: OptionType.SDK,
	note: {
		sdk: `This is the second step of two to unstake a stake account on Solana.

You can only withdraw a Solana Stake Account if it's deactivated.

${noteSignAndBroadcast('Solana')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftWithdrawStakedBalanceTx(stakeAccountAddress: string, walletAddress: string, amountSol?: number): Promise<SolanaTx> */
const tx = await k.sol.craftWithdrawStakedBalanceTx(stakeAccountAddress, WALLET_PUBKEY, 42.1337);

/* async sign(integration: string, transaction: SolanaTx, note?: string): Promise<SolanaTx> */
const signed = await k.sol.sign('vault-1', tx);

/* async broadcast(transaction: SolanaTx): Promise<string | undefined> */
const hash = await k.sol.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.solStakeAccountAddress,
				...stakeAccountAddress(),
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.solWalletAddress,
				...walletAddress('SOL'),
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.solWithdrawAmount,
				...amount('SOL', 'withdraw', 'If empty, the whole stake will be withdrawn.', false),
				type: 'number',
				required: false,
			},
			{
				id: OptionInputId.solIntegration,
				...integration,
				type: 'text',
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txSolWithdraw,
		api: undefined,
	},
};

export default withdraw;
