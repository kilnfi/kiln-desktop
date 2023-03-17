import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { walletAddress, integration, stakeAccountAddress, amount, accountId, noteSignAndBroadcast } from '../common';

const merge: Option = {
	id: OptionId.txSolMerge,
	label: 'Merge',
	type: OptionType.SDK,
	note: {
		sdk: `Merge one active Solana Stake Account to an other one in one transaction.

${noteSignAndBroadcast('Solana')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftMergeStakeAccountsTx(stakeAccountSourceAddress: string, stakeAccountDestinationAddress: string, walletAddress: string): Promise<SolanaTx> */
const tx = await k.sol.craftMergeStakeAccountsTx(stakeAccountSourceAddress, stakeAccountDestinationAddress, WALLET_PUBKEY);

/* async sign(integration: string, transaction: SolanaTx, note?: string): Promise<SolanaTx> */
const signed = await k.sol.sign('vault-1', tx);

/* async broadcast(transaction: SolanaTx): Promise<string | undefined> */
const hash = await k.sol.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.solStakeAccountSourceAddress,
				...stakeAccountAddress('Source'),
				type: 'text',
				required: true,
			},
      {
				id: OptionInputId.solStakeAccountDestinationAddress,
				...stakeAccountAddress('Destination'),
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
				id: OptionInputId.solIntegration,
				...integration,
				type: 'text',
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txSolMerge,
		api: undefined,
	},
};

export default merge;
