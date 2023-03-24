import { Option, OptionFunctionSdk, OptionId, OptionInputId, OptionType } from '../../../../types/option';
import { controllerAccount, integration, noteSignAndBroadcast } from '../common';

const setPayee: Option = {
	id: OptionId.txDotSetPayee,
	label: 'Set Payee',
	type: OptionType.SDK,
	note: {
		sdk: `First, craft a dot set reward destination transaction that updates the destination rewards address for the given stash account.

${noteSignAndBroadcast('Polkadot')}`,
		api: undefined,
	},
	usage: {
		sdk: `/* async craftSetPayeeTx(controllerAccount: string, rewardsDestination: RewardDestination): Promise<DotTransaction> */
const tx = await k.dot.craftSetPayeeTx(controllerAccount, rewardsDestination);

/* async sign(integration: string, transaction: DotTransaction): Promise<SubmittableExtrinsic> */
const signed = await k.dot.sign('vault-1', tx);

/* async broadcast(transaction: SubmittableExtrinsic): Promise<SubmittedDotTransaction> */
const hash = await k.dot.broadcast(signed);`,
		api: undefined,
	},
	inputs: {
		sdk: [
			{
				id: OptionInputId.dotControllerAccount,
				...controllerAccount,
				type: 'text',
				required: true,
			},
      {
        id: OptionInputId.dotRewardDestination,
        label: 'Rewards Destination',
        placeholder: 'Staked',
        details: `This can be either "Staked", "Stash", "Controller" or any other account address.

- "Staked": Rewards are paid into the stash account, increasing the amount at stake accordingly.
- "Stash": Rewards are paid into the stash account, not increasing the amount at stake.
- "Controller": Rewards are paid into the controller account.
- Custom account address: Rewards are paid into the custom account address.`,
        type: 'text',
        required: true,
      },
			{
				id: OptionInputId.dotIntegration,
				...integration,
				type: 'text',
				required: true,
			},
		],
		api: undefined,
	},
	functions: {
		sdk: OptionFunctionSdk.txDotSetPayee,
		api: undefined,
	},
};

export default setPayee;
