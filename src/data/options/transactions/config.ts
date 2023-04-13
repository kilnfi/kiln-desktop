import { OptionId, OptionInputType, OptionInputId } from '../../../types/option';
import {
	accountId,
	amount,
	controllerAccountAddress,
	integration,
	note,
	noteGetStatus,
	options,
	stakeAccountAddress,
	stashAccountAddress,
	transactionHash,
	usage,
	usageGetStatus,
	validatorAddress,
	walletAddress,
} from './utils';

export const labels: Record<OptionId, string> = {
	[OptionId.tx]: 'craft transactions',
	[OptionId.txAda]: 'on Cardano',
	[OptionId.txAdaStake]: 'Stake',
	[OptionId.txAdaUnstake]: 'Unstake',
	[OptionId.txAdaWithdrawRewards]: 'Withdraw rewards',
	[OptionId.txAdaGetStatus]: 'Get transaction status',
	[OptionId.txAtom]: 'on Cosmos Hub',
	[OptionId.txAtomStake]: 'Stake',
	[OptionId.txAtomUnstake]: 'Unstake',
	[OptionId.txAtomWithdrawRewards]: 'Withdraw rewards',
	[OptionId.txAtomGetStatus]: 'Get transaction status',
	[OptionId.txDot]: 'on Polkadot',
	[OptionId.txDotBond]: 'Bond',
	[OptionId.txDotNominate]: 'Nominate',
	[OptionId.txDotBondExtra]: 'Bond Extra',
	[OptionId.txDotUnbond]: 'Unbond',
	[OptionId.txDotRebond]: 'Rebond',
	[OptionId.txDotWithdrawUnbonded]: 'Withdraw Unbonded',
	[OptionId.txDotChill]: 'Chill',
	[OptionId.txDotSetController]: 'Set Controller',
	[OptionId.txDotSetPayee]: 'Set Payee',
	[OptionId.txDotGetStatus]: 'Get transaction status',
	[OptionId.txMatic]: 'on Polygon',
	[OptionId.txMaticApprove]: 'Approve',
	[OptionId.txMaticBuyVoucher]: 'Buy voucher',
	[OptionId.txMaticSellVoucher]: 'Sell voucher',
	[OptionId.txMaticWithdrawRewards]: 'Withdraw rewards',
	[OptionId.txMaticRestakeRewards]: 'Restake rewards',
	[OptionId.txMaticUnstake]: 'Unstake claim tokens',
	[OptionId.txMaticGetStatus]: 'Get transaction status',
	[OptionId.txNear]: 'on Near',
	[OptionId.txNearStake]: 'Stake',
	[OptionId.txNearUnstake]: 'Unstake',
	[OptionId.txNearWithdraw]: 'Withdraw',
	[OptionId.txNearGetStatus]: 'Get transaction status',
	[OptionId.txSol]: 'on Solana',
	[OptionId.txSolStake]: 'Stake',
	[OptionId.txSolDeactivate]: 'Deactivate stake',
	[OptionId.txSolWithdraw]: 'Withdraw stake',
	[OptionId.txSolSplit]: 'Split stake',
	[OptionId.txSolMerge]: 'Merge stakes',
	[OptionId.txSolGetStatus]: 'Get transaction status',
	[OptionId.txXtz]: 'on Tezos',
	[OptionId.txXtzStake]: 'Stake',
	[OptionId.txXtzUnstake]: 'Unstake',
	[OptionId.txXtzGetStatus]: 'Get transaction status',
};

export const notes: Record<OptionId, string> = {
	[OptionId.tx]: '',
	[OptionId.txAda]: '',
	[OptionId.txAdaStake]: note([
		'Frist craft a delegation transaction to the given pool id.',
		'It also links your stake to the kiln account id provided.',
	]),
	[OptionId.txAdaUnstake]: note(['First craft an undelegate transaction.']),
	[OptionId.txAdaWithdrawRewards]: note([
		'First craft a withdraw rewards transaction.',
		'Rewards on Cardano are automatically added to your stake balance but you need to withdraw them in order to spend or exchange them.',
	]),
	[OptionId.txAdaGetStatus]: noteGetStatus,
	[OptionId.txAtom]: '',
	[OptionId.txAtomStake]: note([
		'Craft a delegation transaction to the validator address provided.',
		'It also links your stake to the kiln account id provided.',
	]),
	[OptionId.txAtomUnstake]: note(['First, craft an undelegate transaction.']),
	[OptionId.txAtomWithdrawRewards]: note([
		'First craft a withdraw rewards transaction.',
		'Note that rewards then enter the 21 days unbonding period.',
	]),
	[OptionId.txAtomGetStatus]: noteGetStatus,
	[OptionId.txDot]: '',
	[OptionId.txDotBond]: note([
		'First craft a bond transaction that allow you to lock tokens that will be used by your nominated validators.',
		'The bond transaction should be made if this is the first time you bond tokens from your wallet. If you already have some tokens bonded, use the craftBondExtraTx function.',
		'The account_id is used to link your DOT stake to your Kiln account.',
		"You can also pass an options object to set a different controller account and a different reward address destination for your stake. If you don't explicitly set a controller account, your controller account will be your stash account, ie your wallet delegating.",
	]),
	[OptionId.txDotNominate]: note([
		'First craft a nominate transaction that allows you to nominate validators (up to 16).',
		'Once done, if your nominated validators are elected to produce block on the current era, you will start earning rewards.',
	]),
	[OptionId.txDotBondExtra]: note([
		'First craft a bond extra transaction that allows you to lock more tokens to already bonded tokens.',
	]),
	[OptionId.txDotUnbond]: note([
		'First craft an unbond transaction that allows you to unlock bonded tokens.',
		'Note that the unbonding period is about 28 days.',
	]),
	[OptionId.txDotRebond]: note([
		'First craft a rebond transaction that allows you to bond back tokens that are currently unbonding.',
	]),
	[OptionId.txDotWithdrawUnbonded]: note([
		'First craft a withdraw unbonded transaction that allows you to withdraw unbonded tokens so all unbonded tokens become available in your wallet.',
	]),
	[OptionId.txDotSetController]: note([
		'First craft a set controller transaction that allows you to update the controller account used for your stash account, ie your wallet.',
	]),
	[OptionId.txDotSetPayee]: note([
		'First craft a set payee transaction that allows you to update the reward destination address for the given controller account.',
	]),
	[OptionId.txDotChill]: note([
		'First craft a chill transaction that allows you to freeze a controller account.',
		'This means that the controller account will stop nominate validators and you will stop earning rewards from the next era.',
	]),
	[OptionId.txDotGetStatus]: noteGetStatus,
	[OptionId.txMatic]: '',
	[OptionId.txMaticApprove]: note([
		'First craft an approve transaction that allows a contract to spend an amount of ERC-20 MATIC.',
		'This function is necessary prior to stake MATIC through a ValidatorShare proxy contract.',
		'Users must first allow the MATIC StakeManager proxy contract to spend the amount that needs to be spent.',
		'If no amount is specified, an infinite amount will be approved and this transaction will no longer be required before each staking transaction. That said, this is not recommended for security reasons.',
	]),
	[OptionId.txMaticBuyVoucher]: note([
		'First craft a buy voucher transaction to exchange MATIC against validator shares.',
		'It is done by doing a buyVoucher contract call to a ValidatorShare proxy contract of your desired validator.',
		'This function also links your stake to your kiln account id.',
	]),
	[OptionId.txMaticSellVoucher]: note([
		'First craft a sell voucher transaction to undound your staked MATIC.',
		'It is done by doing a sellVoucher contract call to a ValidatorShare proxy contract.',
		'Once done, your MATIC token enter the unbonding period of ~3/4 days (80 checkpoints).',
	]),
	[OptionId.txMaticWithdrawRewards]: note([
		'First craft a withdraw rewards transaction to transfer your available rewards to your wallet.',
	]),
	[OptionId.txMaticRestakeRewards]: note([
		'First craft a restake rewards transaction to convert your available rewards to staked MATIC.',
		'This is how you can take advantage of auto-compounding by automating this process.',
	]),
	[OptionId.txMaticUnstake]: note([
		'First craft an unstake transaction to transfer your unbonded tokens to your wallet.',
	]),
	[OptionId.txMaticGetStatus]: noteGetStatus,
	[OptionId.txNear]: '',
	[OptionId.txNearStake]: note(['First craft a stake transaction to the given pool id.']),
	[OptionId.txNearUnstake]: note([
		'First craft an unstake transaction.',
		'Note that once unstaked, your token will be available for withdrawals after ~48h (2 to 3 epochs).',
	]),
	[OptionId.txNearWithdraw]: note([
		'Craft a withdraw transaction.',
		'Note the amount to withdraw must first be unstaked and available before you can withdraw it.',
	]),
	[OptionId.txNearGetStatus]: noteGetStatus,
	[OptionId.txSol]: '',
	[OptionId.txSolStake]: note([
		'On Solana, a wallet can create multiple stake accounts. This stake action creates a new stake account and delegates funds to the chosen validator vote account address.',
		'The stake account will earn rewards after an activation period of one epoch (~2.5 days).',
		'You can retrieve the address of the created stake account by using getRewardsByWallets after broadcasting your transaction.',
		"To see the created stake account, go to your favorite Solana explorer and enter the hash of the broadcasted transaction. On SolanaFM for instance you can find it next to 'Create account'.",
	]),
	[OptionId.txSolDeactivate]: note([
		'First craft a deactivate stake transaction.',
		'Note that it takes one full epoch (~2 to 3 days) to deactivate a stake.',
	]),
	[OptionId.txSolWithdraw]: note([
		'First craft a withdraw stake transaction. Your stake must be deactivated before you can withdraw funds from it.',
	]),
	[OptionId.txSolSplit]: note([
		'First craft a split stake transaction. This allows you to split your stake in two stakes.',
		'This is useful when you want to withdraw only a portion of your stake without deactivating it entirely.',
		'You would then split it into two stakes with the new stake containing the amount you wish to withdraw - a stake that you can then deactivate and withdraw.',
	]),
	[OptionId.txSolMerge]: note([
		'First craft a merge stakes transaction. This allows you to merge two stakes into one on certain conditions.',
	]),
	[OptionId.txSolGetStatus]: noteGetStatus,
	[OptionId.txXtz]: '',
	[OptionId.txXtzStake]: note([
		'First craft a delegation transaction to the baker address provided.',
		'Note that a tezos delegation takes ~23 days before becoming active.',
	]),
	[OptionId.txXtzUnstake]: note(['First craft an undelegate transaction.']),
	[OptionId.txXtzGetStatus]: noteGetStatus,
};

export const usages: Record<OptionId, string> = {
	[OptionId.tx]: '',
	[OptionId.txAda]: '',
	[OptionId.txAdaStake]: usage(
		["const tx = await k.ada.craftStakeTx('account_id', 'wallet_address', 'pool_id');"],
		'ada',
	),
	[OptionId.txAdaUnstake]: usage(["const tx = await k.ada.craftUnstakeTx('wallet_address');"], 'ada'),
	[OptionId.txAdaWithdrawRewards]: usage(
		["const tx = await k.ada.craftWithdrawRewardsTx('wallet_address', 1);"],
		'ada',
	),
	[OptionId.txAdaGetStatus]: usageGetStatus('ada'),
	[OptionId.txAtom]: '',
	[OptionId.txAtomStake]: usage(
		["const tx = await k.atom.craftStakeTx('account_id', 'wallet_address', 'validator_address',  1);"],
		'atom',
	),
	[OptionId.txAtomUnstake]: usage(
		["const tx = await k.atom.craftUnstakeTx('wallet_address', 'validator_address', 1);"],
		'atom',
	),
	[OptionId.txAtomWithdrawRewards]: usage(
		["const tx = await k.atom.craftWithdrawRewardsTx('wallet_address', 'validator_address');"],
		'atom',
	),
	[OptionId.txAtomGetStatus]: usageGetStatus('atom'),
	[OptionId.txDot]: '',
	[OptionId.txDotBond]: usage(
		[
			`// optional, only for specific setups
const options = {
  controllerAccount: '...';
  rewardDestination: '...';
};`,
			"const tx = await k.dot.craftBondTx('account_id', 'stash_account', 1, options);",
		],
		'dot',
	),
	[OptionId.txDotNominate]: usage(
		["const tx = await k.dot.craftNominateTx('controller_account', ['validator_address_1', 'validator_address_2']);"],
		'dot',
	),
	[OptionId.txDotBondExtra]: usage(["const tx = await k.dot.craftBondExtraTx('stash_account', 1);"], 'dot'),
	[OptionId.txDotUnbond]: usage(["const tx = await k.dot.craftUnbondTx('controller_account', 1);"], 'dot'),
	[OptionId.txDotRebond]: usage(["const tx = await k.dot.craftRebondTx('controller_account', 1);"], 'dot'),
	[OptionId.txDotWithdrawUnbonded]: usage(
		["const tx = await k.dot.craftWithdrawUnbondedTx('controller_account');"],
		'dot',
	),
	[OptionId.txDotSetController]: usage(
		["const tx = await k.dot.craftSetControllerTx('stash_account', 'controller_account');"],
		'dot',
	),
	[OptionId.txDotSetPayee]: usage(["const tx = await k.dot.craftSetPayeeTx('controller_account', 'Staked');"], 'dot'),
	[OptionId.txDotChill]: usage(["const tx = await k.dot.craftChillTx('controller_account');"], 'dot'),
	[OptionId.txDotGetStatus]: usageGetStatus('dot', "'tx_hash', 'block_hash'"),
	[OptionId.txMatic]: '',
	[OptionId.txMaticApprove]: usage(
		["const tx = await k.matic.craftApproveTx('wallet_address', 'stake_manager_proxy_address', 1);"],
		'matic',
	),
	[OptionId.txMaticBuyVoucher]: usage(
		["const tx = await k.matic.craftBuyVoucherTx('account_id', 'wallet_address', 'validator_share_proxy_address', 1);"],
		'matic',
	),
	[OptionId.txMaticSellVoucher]: usage(
		["const tx = await k.matic.craftSellVoucherTx('wallet_address', 'validator_share_proxy_address', 1);"],
		'matic',
	),
	[OptionId.txMaticWithdrawRewards]: usage(
		["const tx = await k.matic.craftWithdrawRewardsTx('wallet_address', 'validator_share_proxy_address');"],
		'matic',
	),
	[OptionId.txMaticRestakeRewards]: usage(
		["const tx = await k.matic.craftRestakeRewardsTx('wallet_address', 'validator_share_proxy_address');"],
		'matic',
	),
	[OptionId.txMaticUnstake]: usage(
		["const tx = await k.matic.craftUnstakeClaimTokensTx('wallet_address', 'validator_share_proxy_address');"],
		'matic',
	),
	[OptionId.txMaticGetStatus]: usageGetStatus('matic'),
	[OptionId.txNear]: '',
	[OptionId.txNearStake]: usage(
		["const tx = await k.near.craftStakeTx('account_id', 'wallet_address', 'pool_id', 1);"],
		'near',
	),
	[OptionId.txNearUnstake]: usage(["const tx = await k.near.craftUnstakeTx('wallet_address', 'pool_id', 1);"], 'near'),
	[OptionId.txNearWithdraw]: usage(
		["const tx = await k.near.craftWithdrawTx('wallet_address', 'pool_id', 1);"],
		'near',
	),
	[OptionId.txNearGetStatus]: usageGetStatus('near'),
	[OptionId.txSol]: '',
	[OptionId.txSolStake]: usage(
		["const tx = await k.sol.craftStakeTx('account_id', 'wallet_address', 'vote_account_address', 1);"],
		'sol',
	),
	[OptionId.txSolDeactivate]: usage(
		["const tx = await k.sol.craftDeactivateStakeTx('stake_account_address', 'wallet_address');"],
		'sol',
	),
	[OptionId.txSolWithdraw]: usage(
		["const tx = await k.sol.craftWithdrawStakeTx('stake_account_address', 'wallet_address', 1);"],
		'sol',
	),
	[OptionId.txSolSplit]: usage(
		["const tx = await k.sol.craftSplitStakeTx('account_id', 'stake_account_address', 'wallet_address', 1);"],
		'sol',
	),
	[OptionId.txSolMerge]: usage(
		[
			"const tx = await k.sol.craftMergeStakesTx('stake_account_source', 'stake_account_destination', 'wallet_address');",
		],
		'sol',
	),
	[OptionId.txSolGetStatus]: usageGetStatus('sol'),
	[OptionId.txXtz]: '',
	[OptionId.txXtzStake]: usage(
		["const tx = await k.xtz.craftStakeTx('account_id', 'wallet_address', 'baker_address');"],
		'xtz',
	),
	[OptionId.txXtzUnstake]: usage(["const tx = await k.xtz.craftUnstakeTx('wallet_address');"], 'xtz'),
	[OptionId.txXtzGetStatus]: usageGetStatus('xtz', "blockNumber, 'tx_hash'"),
};

export const inputs: Record<
	OptionInputId,
	{ label: string; details: string; placeholder: string; type: OptionInputType; separator?: string }
> = {
	[OptionInputId.adaAccountId]: accountId,
	[OptionInputId.adaWalletAddress]: walletAddress('ADA'),
	[OptionInputId.adaStakePoolId]: validatorAddress('pool', 'pool10rdglgh4pzvkf936p2m669qzarr9dusrhmmz9nultm3uvq4eh5k'),
	[OptionInputId.adaWithdrawRewardsAmount]: amount('ADA', 'If empty, the whole rewards will be withdrawn.', false),
	[OptionInputId.adaTransactionHash]: transactionHash,
	[OptionInputId.adaIntegration]: integration,
	[OptionInputId.atomAccountId]: accountId,
	[OptionInputId.atomStakeAmount]: amount('ATOM'),
	[OptionInputId.atomUnstakeAmount]: amount('ATOM', 'If empty, the whole stake will be unstaked.', false),
	[OptionInputId.atomWalletAddress]: walletAddress('ATOM'),
	[OptionInputId.atomValidatorAddress]: validatorAddress('validator', 'cosmosvaloper1uxlf7mvr8nep3gm7udf2u9remms2jyjqvwdul2'),
	[OptionInputId.atomTransactionHash]: transactionHash,
	[OptionInputId.atomIntegration]: integration,
	[OptionInputId.dotAccountId]: accountId,
	[OptionInputId.dotBondAmount]: amount('DOT'),
	[OptionInputId.dotBondExtraAmount]: amount('DOT'),
	[OptionInputId.dotRebondAmount]: amount('DOT'),
	[OptionInputId.dotUnbondAmount]: amount('DOT'),
	[OptionInputId.dotStashAccountAddress]: stashAccountAddress,
	[OptionInputId.dotControllerAccountAddress]: controllerAccountAddress,
	[OptionInputId.dotNominatedValidatorsAddresses]: {
		label: 'Nominate up to 16 validators',
		placeholder: `xxx
xxx
xxx
...`,
		details: `Choose up to 16 validators you want to nominate.

If they are elected by the protocol during an erea (each 24 hours),
and that you belong to the top 512 nominators of this validators
(ordered by the number of bonded tokens), you will earn rewards.

Enter the address of these validators separated by a new line.`,
		type: OptionInputType.textArray,
		separator: '\n',
	},
	[OptionInputId.dotRewardDestination]: {
		label: 'Rewards Destination',
		placeholder: 'Staked',
		details: `This can be either "Staked", "Stash", "Controller" or any other account address.

- "Staked": Rewards are paid into the stash account, increasing the amount at stake accordingly.
- "Stash": Rewards are paid into the stash account, not increasing the amount at stake.
- "Controller": Rewards are paid into the controller account.
- Custom account address: Rewards are paid into the custom account address.`,
		type: OptionInputType.text,
	},
	[OptionInputId.dotOptions]: options(
		['controllerAccount', 'rewardDestination'],
		[
			'rewardDestination can be either "Staked", "Stash", "Controller" or any other account address.',
			'Staked: Rewards are paid into the stash account, increasing the amount at stake accordingly.',
			'Stash: Rewards are paid into the stash account, not increasing the amount at stake.',
			'Controller: Rewards are paid into the controller account.',
			'Custom account address: Rewards are paid into the custom account address.',
		],
	),
	[OptionInputId.dotTransactionHash]: transactionHash,
	[OptionInputId.dotBlockHash]: {
		label: 'Block Hash',
		placeholder: 'xxx',
		details: 'Block hash in which the transaction was included.',
		type: OptionInputType.text,
	},
	[OptionInputId.dotIntegration]: integration,
	[OptionInputId.maticAccountId]: accountId,
	[OptionInputId.maticWalletAddress]: walletAddress('MATIC'),
	[OptionInputId.maticContractAddressToApprove]: {
		label: 'Contract Address to approve',
		placeholder: 'xxx',
		details: `Choose between the goerli and mainnet StakeManager proxy:
goerli: 0x00200eA4Ee292E253E6Ca07dBA5EdC07c8Aa37A3
mainnet: 0x5e3Ef299fDDf15eAa0432E6e66473ace8c13D908`,
		type: OptionInputType.text,
	},
	[OptionInputId.maticValidatorShareProxyAddress]: {
		label: 'ValidatorShare proxy address',
		placeholder: '0xD14a87025109013B0a2354a775cB335F926Af65A',
		details: `ValidatorShare proxy contract address of the validator.
Kiln's one is 0xD14a87025109013B0a2354a775cB335F926Af65A. You can check our documentation.`,
		type: OptionInputType.text,
	},
	[OptionInputId.maticApproveAmount]: amount(
		'MATIC',
		'If no amount is specified, an infinite amount will be approved and this transaction will no longer be required before each staking transaction. That said, this is not recommended for security reasons.',
		false,
	),
	[OptionInputId.maticBuyVoucherAmount]: amount('MATIC'),
	[OptionInputId.maticSellVoucherAmount]: amount('MATIC'),
	[OptionInputId.maticTransactionHash]: transactionHash,
	[OptionInputId.maticIntegration]: integration,
	[OptionInputId.nearAccountId]: accountId,
	[OptionInputId.nearWalletAddress]: walletAddress('NEAR'),
	[OptionInputId.nearStakeAmount]: amount('NEAR'),
	[OptionInputId.nearUnstakeAmount]: amount('NEAR', 'If empty, the whole stake will be unstaked.', false),
	[OptionInputId.nearWithdrawAmount]: amount('NEAR', 'If empty, the whole stake will be withdrawn', false),
	[OptionInputId.nearStakePoolId]: validatorAddress('pool', 'kiln-1.poolv1.near'),
	[OptionInputId.nearTransactionHash]: transactionHash,
	[OptionInputId.nearIntegration]: integration,
	[OptionInputId.solAccountId]: accountId,
	[OptionInputId.solWalletAddress]: walletAddress('SOL'),
	[OptionInputId.solVoteAccountAddress]: validatorAddress(
		'vote account',
		'DdCNGDpP7qMgoAy6paFzhhak2EeyCZcgjH7ak5u5v28m',
	),
	[OptionInputId.solStakeAmount]: amount('SOL'),
	[OptionInputId.solWithdrawAmount]: amount('SOL'),
	[OptionInputId.solSplitAmount]: amount('SOL'),
	[OptionInputId.solStakeAccountAddress]: stakeAccountAddress(),
	[OptionInputId.solStakeAccountSourceAddress]: stakeAccountAddress('Source'),
	[OptionInputId.solStakeAccountDestinationAddress]: stakeAccountAddress('Destination'),
	[OptionInputId.solTransactionHash]: transactionHash,
	[OptionInputId.solIntegration]: integration,
	[OptionInputId.xtzAccountId]: accountId,
	[OptionInputId.xtzWalletAddress]: walletAddress('XTZ'),
	[OptionInputId.xtzBakerAddress]: validatorAddress('baker', 'tz3dKooaL9Av4UY15AUx9uRGL5H6YyqoGSPV'),
	[OptionInputId.xtzBlockNumber]: {
		label: 'Block Number',
		placeholder: '1000000',
		details: 'Block number in which the transaction was included.',
		type: OptionInputType.number,
	},
	[OptionInputId.xtzTransactionHash]: transactionHash,
	[OptionInputId.xtzIntegration]: integration,
};
