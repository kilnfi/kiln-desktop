import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { accountId, amount, integration, noteSignAndBroadcast, walletAddress } from '../common';

const stake: Option = {
	id: OptionId.txAtomStake,
	label: 'Stake',
	type: OptionType.SDK,
	note: {
		sdk: `On Cosmos Hub, first delegate your wallet balance in one transaction.

${noteSignAndBroadcast('Cosmos Hub')}`,
		api: undefined,
	},
	usage: {
		sdk: `// optional, only for specific setups
const options = {
	// use an other validator than Kiln's
	validatorAddress: '';
};

/* async craftStakeTx(accountId: string, walletAddress: string, amountAtom: number, options?: AtomStakeOptions): Promise<AtomTx> */
const tx = await k.atom.craftStakeTx(account.id, WALLET_PUBKEY, 32.1, options);

/* async sign(integration: string, transaction: AtomTx): Promise<TxRaw> */
const signed = await k.atom.sign('vault-1', tx);

/* async broadcast(transaction: TxRaw): Promise<string | undefined> */
const hash = await k.atom.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.atomAccountId,
				...accountId,
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.atomWalletAddress,
				...walletAddress('ATOM'),
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.atomStakeAmount,
				...amount('ATOM', 'stake'),
				type: 'number',
				required: true,
			},
			{
				id: OptionInputId.atomOptions,
				label: 'Options',
				details: `Optional. Only for specific setups.

Don't forget to:
- put the key validatorAddress between quotes.
- not put a comma after its value.`,
				placeholder: `{
	"validatorAddress": "..."
}`,
				type: 'json',
				required: false,
			},
			{
				id: OptionInputId.atomIntegration,
				...integration,
				type: 'text',
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txAtomStake,
		api: undefined,
	},
};

export default stake;
