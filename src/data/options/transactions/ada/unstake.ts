import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { integration, noteSignAndBroadcast, walletAddress } from '../common';

const unstake: Option = {
	id: OptionId.txAdaUnstake,
	label: 'Unstake',
	type: OptionType.SDK,
	note: {
		sdk: `First unstake delegated wallet.

${noteSignAndBroadcast('Cardano')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftUnstakeTx(walletAddress: string): Promise<Transaction> */
const tx = await k.ada.craftUnstakeTx(WALLET_PUBKEY);

/* async sign(integration: string, transaction: Transaction): Promise<Transaction> */
const signed = await k.ada.sign('vault-1', tx);

/* async broadcast(transaction: Transaction): Promise<string | undefined> */
const hash = await k.ada.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.adaWalletAddress,
				...walletAddress('ADA'),
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.adaIntegration,
				...integration,
				type: 'text',
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txAdaUnstake,
		api: undefined,
	},
};

export default unstake;
