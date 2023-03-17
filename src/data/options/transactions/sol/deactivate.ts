import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { walletAddress, integration, stakeAccountAddress, noteSignAndBroadcast } from '../common';

const deactivate: Option = {
	id: OptionId.txSolDeactivate,
	label: 'Deactivate',
	type: OptionType.SDK,
	note: {
		sdk: `This is the first step of two to unstake a stake account on Solana.

${noteSignAndBroadcast('Solana')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftDeactivateStakeTx(stakeAccountAddress: string, walletAddress: string): Promise<SolanaTx> */
const tx = await k.sol.craftDeactivateStakeTx(stakeAccountAddress, WALLET_PUBKEY);

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
        required: true
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
		sdk: OptionFunctionSdk.txSolDeactivate,
		api: undefined,
	},
};

export default deactivate;
