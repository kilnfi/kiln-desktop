enum OptionId {
	tx = 'tx',
	txAda = 'tx-ada',
	txAdaStake = 'tx-ada-stake',
	txAdaUnstake = 'tx-ada-unstake',
	txAdaGetStatus = 'tx-ada-get-status',
	txNear = 'tx-near',
	txNearStake = 'tx-near-stake',
	txNearUnstake = 'tx-near-unstake',
	txNearGetStatus = 'tx-near-get-status',
	txSol = 'tx-sol',
	txSolStake = 'tx-sol-stake',
	txSolDeactivate = 'tx-sol-deactivate',
	txSolWithdraw = 'tx-sol-withdraw',
	txSolSplit = 'tx-sol-split',
	txSolMerge = 'tx-sol-merge',
	txSolGetStatus = 'tx-sol-get-status',
	txAtom = 'tx-atom',
	txAtomStake = 'tx-atom-stake',
	txAtomUnstake = 'tx-atom-unstake',
	txAtomGetStatus = 'tx-atom-get-status',
	txDot = 'tx-dot',
	txDotBond = 'tx-dot-bond',
	txDotExtraBond = 'tx-dot-extra-bond',
	txDotRebond = 'tx-dot-rebond',
	txDotUnbond = 'tx-dot-unbond',
	txDotNominate = 'tx-dot-nominate',
	txDotWithdraw = 'tx-dot-withdraw',
	txDotSetController = 'tx-dot-set-controller',
	txDotSetPayee = 'tx-dot-set-payee',
	txDotChill = 'tx-dot-chill',
}

enum OptionInputId {
	adaAccountId = 'ada-account-id',
	adaWalletAddress = 'ada-wallet-address',
	adaTransactionHash = 'ada-transaction-hash',
	adaIntegration = 'ada-integration',
	adaOptions = 'ada-options',
	nearAccountId = 'near-account-id',
	nearWalletAddress = 'near-wallet-address',
	nearTransactionHash = 'near-transaction-hash',
	nearIntegration = 'near-integration',
	nearStakeAmount = 'near-stake-amount',
	nearUnstakeAmount = 'near-unstake-amount',
	nearStakePoolId = 'near-stake-pool-id',
	nearOptions = 'near-options',
	solAccountId = 'sol-account-id',
	solIntegration = 'sol-integration',
	solWalletAddress = 'sol-wallet-address',
	solTransactionHash = 'sol-transaction-hash',
	solStakeAmount = 'sol-stake-amount',
	solWithdrawAmount = 'sol-withdraw-amount',
	solSplitAmount = 'sol-split-amount',
	solStakeAccountAddress = 'sol-stake-account-address',
	solStakeAccountSourceAddress = 'sol-stake-account-source-address',
	solStakeAccountDestinationAddress = 'sol-stake-account-destination-address',
	solOptions = 'sol-options',
	atomAccountId = 'atom-account-id',
	atomIntegration = 'atom-integration',
	atomTransactionHash = 'atom-transaction-hash',
	atomStakeAmount = 'atom-stake-amount',
	atomUnstakeAmount = 'atom-unstake-amount',
	atomWalletAddress = 'atom-wallet-address',
	atomValidatorAddress = 'atom-validator-address',
	atomOptions = 'atom-options',
	dotAccountId = 'dot-account-id',
	dotIntegration = 'dot-integration',
	dotBondAmount = 'dot-bond-amount',
	dotExtraBondAmount = 'dot-extra-bond-amount',
	dotRebondAmount = 'dot-rebond-amount',
	dotUnbondAmount = 'dot-unbond-amount',
	dotWalletAddress = 'dot-wallet-address',
	dotStashAccount = 'dot-stash-account',
	dotControllerAccount = 'dot-controller-account',
	dotNominateValidators = 'dot-nominate-validators',
	dotRewardDestination = 'dot-reward-destination',
	dotOptions = 'dot-options',
}

enum OptionFunctionSdk {
	txAdaStake = 'tx-ada-stake-sdk',
	txAdaUnstake = 'tx-ada-unstake-sdk',
	txAdaGetStatus = 'tx-ada-get-status-sdk',
	txNearStake = 'tx-near-stake-sdk',
	txNearUnstake = 'tx-near-unstake-sdk',
	txNearGetStatus = 'tx-near-get-status-sdk',
	txSolStake = 'tx-sol-stake-sdk',
	txSolDeactivate = 'tx-sol-deactivate-sdk',
	txSolWithdraw = 'tx-sol-withdraw-sdk',
	txSolSplit = 'tx-sol-split-sdk',
	txSolMerge = 'tx-sol-merge-sdk',
	txSolGetStatus = 'tx-sol-get-status-sdk',
	txAtomStake = 'tx-atom-stake-sdk',
	txAtomUnstake = 'tx-atom-unstake-sdk',
	txAtomGetStatus = 'tx-atom-get-status-sdk',
	txDotBond = 'tx-dot-bond-sdk',
	txDotExtraBond = 'tx-dot-extra-bond-sdk',
	txDotRebond = 'tx-dot-rebond-sdk',
	txDotUnbond = 'tx-dot-unbond-sdk',
	txDotNominate = 'tx-dot-nominate-sdk',
	txDotWithdraw = 'tx-dot-withdraw-sdk',
	txDotSetController = 'tx-dot-set-controller-sdk',
	txDotSetPayee = 'tx-dot-set-payee-sdk',
	txDotChill = 'tx-dot-chill-sdk',
}

enum OptionFunctionApi {}

enum OptionType {
	NONE,
	SDK,
	API,
	BOTH,
}

type OptionInput = {
	id: OptionInputId;
	label: string;
	details: string;
	placeholder: string;
	required: boolean;
	type: 'number' | 'text' | 'text-array' | 'json';
	separator?: string;
};

type Option = {
	id: OptionId;
	label: string;
	type?: OptionType;
	subOptions?: Option[];
	note?: {
		sdk?: string;
		api?: string;
	};
	usage?: {
		sdk?: string;
		api?: string;
	};
	inputs?: {
		sdk?: OptionInput[];
		api?: OptionInput[];
	};
	functions?: {
		sdk?: OptionFunctionSdk;
		api?: OptionFunctionApi;
	};
};

export { Option, OptionId, OptionType, OptionInput, OptionInputId, OptionFunctionSdk, OptionFunctionApi };
