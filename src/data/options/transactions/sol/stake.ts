import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { accountId, amount, integration, noteSignAndBroadcast, walletAddress } from '../common';

const stake: Option = {
	id: OptionId.txSolStake,
	label: 'Stake',
	type: OptionType.SDK,
	note: {
		sdk: `On Solana, a wallet can create multiple Stake Accounts. The staking transaction creates a new stake account and delegates funds to the chosen validator.

${noteSignAndBroadcast('Solana')}

To see the created stake account, go to your favorite Solana explorer and enter the hash of the broadcasted transaction. On SolanaFM for instance you can find it next to "Create account".`,
		api: undefined,
	},
	usage: {
		sdk: `// optional, only for specific setups
const options = {
  // to stake on another validator than the default Kiln validator
  voteAccountAddress?: string;
  // specify a memo in the stake tx
  memo?: string;
};

/* async craftStakeTx(accountId: string, walletPubkey: string, amountInSol: number, options?: SolanaStakeOptions): Promise<SolanaTx> */
const tx = await k.sol.craftStakeTx(account.id, WALLET_PUBKEY, 42.1337, options);

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
        id: OptionInputId.solWalletAddress,
        ...walletAddress('SOL'),
        type: 'text',
        required: true
      },
      {
        id: OptionInputId.solStakeAmount,
        ...amount('SOL', 'stake'),
        type: 'number',
        required: true,
      },
      {
        id: OptionInputId.solOptions,
        label: 'Options',
        details: `Optional. Only for specific setups.

Don't forget to:
- put the keys voteAccountAddress and memo between quotes.
- put a comma after the value of voteAccountAddress.
- not put a comma after the value of memo.`,
        placeholder: `{
  "voteAccountAddress": "...",
  "memo": "..."
}`,
        type: 'json',
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
		sdk: OptionFunctionSdk.txSolStake,
		api: undefined,
	},
};

export default stake;
