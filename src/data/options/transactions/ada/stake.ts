import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { accountId, integration, noteSignAndBroadcast, options, walletAddress } from '../common';

const stake: Option = {
	id: OptionId.txAdaStake,
	label: 'Stake',
	type: OptionType.SDK,
	note: {
		sdk: `First delegate your wallet balance in one transaction.

${noteSignAndBroadcast('Cardano')}`,
		api: undefined,
	},
	usage: {
		sdk: `// optional, only for specific setups
const options = {
  // use an other pool than Kiln's
  poolId: '...';
};

/* async craftStakeTx(accountId: string, walletAddress: string, options?: AdaStakeOptions): Promise<Transaction> */
const tx = await k.ada.craftStakeTx(account.id, WALLET_PUBKEY, options);

/* async sign(integration: string, transaction: Transaction): Promise<Transaction> */
const signed = await k.ada.sign('vault-1', tx);

/* async broadcast(transaction: Transaction): Promise<string | undefined> */
const hash = await k.ada.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.adaAccountId,
				...accountId,
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.adaWalletAddress,
				...walletAddress('ADA'),
				type: 'text',
				required: true,
			},
			{
				id: OptionInputId.adaOptions,
				...options(["poolId"]),
				type: 'json',
				required: false,
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
		sdk: OptionFunctionSdk.txAdaStake,
		api: undefined,
	},
};

export default stake;
