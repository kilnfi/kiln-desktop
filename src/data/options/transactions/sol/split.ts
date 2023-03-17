import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { walletAddress, integration, stakeAccountAddress, amount, accountId, noteSignAndBroadcast } from '../common';

const split: Option = {
	id: OptionId.txSolSplit,
	label: 'Split',
	type: OptionType.SDK,
	note: {
		sdk: `Create a new Solana Stake Account by splitting the amount of SOL in an active Stake Account, in one transaction.
		
${noteSignAndBroadcast('Solana')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftSplitStakeAccountTx(accountId: string, stakeAccountAddress: string, walletAddress: string, amountSol: number): Promise<SolanaTx> */
const tx = await k.sol.craftSplitStakeAccountTx(account.id, stakeAccountAddress, WALLET_PUBKEY, 12);

/* async sign(integration: string, transaction: SolanaTx, note?: string): Promise<SolanaTx> */
const signed = await k.sol.sign('vault-1', tx);

/* async broadcast(transaction: SolanaTx): Promise<string | undefined> */
const hash = await k.sol.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
      {
        id: OptionInputId.solAccountId,
        ...accountId,
        type: 'text',
        required: true,
      },
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
				id: OptionInputId.solSplitAmount,
				...amount('SOL', 'split'),
				type: 'number',
				required: true,
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
		sdk: OptionFunctionSdk.txSolSplit,
		api: undefined,
	},
};

export default split;
