import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { accountId, amount, integration, noteSignAndBroadcast, walletAddress } from '../common';

const unstake: Option = {
	id: OptionId.txAtomUnstake,
	label: 'Unstake',
	type: OptionType.SDK,
	note: {
		sdk: `Unstake any amount of token you stake on a validator in one transaction.

${noteSignAndBroadcast('Cosmos Hub')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftUnstakeTx(walletAddress: string, validatorAddress: string, amountAtom?: number): Promise<AtomTx> */
const tx = await k.atom.craftUnstakeTx(WALLET_PUBKEY, validatorAddress, 2.1);

/* async sign(integration: string, transaction: AtomTx): Promise<TxRaw> */
const signed = await k.atom.sign('vault-1', tx);

/* async broadcast(transaction: TxRaw): Promise<string | undefined> */
const hash = await k.atom.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.atomWalletAddress,
				...walletAddress('ATOM'),
				type: 'text',
				required: true,
			},
      {
				id: OptionInputId.atomValidatorAddress,
				label: 'Validator Address',
				details: `Validator address you want to unstake from.
Kiln's validator address is cosmosvaloper1uxlf7mvr8nep3gm7udf2u9remms2jyjqvwdul2.`,
				placeholder: 'cosmosvaloper1uxlf7mvr8nep3gm7udf2u9remms2jyjqvwdul2',
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.atomUnstakeAmount,
				...amount('ATOM', 'unstake', 'If empty, the whole stake will be unstaked.', false),
				type: 'number',
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
		sdk: OptionFunctionSdk.txAtomUnstake,
		api: undefined,
	},
};

export default unstake;
