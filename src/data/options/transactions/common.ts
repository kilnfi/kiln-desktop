const noteSignAndBroadcast = (
	protocol: string,
) => `Then, sign this transactions by specifying the integration name and the crafted transaction.

Finally, broadcast the signed transaction. If you specified a custom RPC url for ${protocol} in the SDK configuration, it will be used instead of the default one.`;

const accountId = {
	label: 'Kiln Account ID',
	details: `From your Kiln organization dashboard, select an account.
In its settings, copy-paste its 'Account ID'.`,
	placeholder: 'xxx',
};

const walletAddress = (token: string) => ({
	label: 'Wallet Public Key',
	details: `From your Fireblocks workspace, select an account.
Choose a wallet holding ${token} tokens and click 'See Deposit Address'.
Copy-paste the 'PERMANENT ADDRESS'.`,
	placeholder: 'xxx',
});

const integration = {
	label: 'Integration',
	details: 'Select an integration you created during the Kiln Connect setup.',
	placeholder: '...',
};

const transactionHash = {
	label: 'Transaction Hash',
	details: 'The hash of the broadcasted transaction.',
	placeholder: 'xxx',
};

const amount = (token: string, action: string, precision?: string, required = true) => ({
	label: `${token} amount`,
	details: `${required && 'Optional.'} Amount of ${token} tokens you want to ${action}.${
		precision &&
		`
${precision}`
	}`,
	placeholder: '100,000',
});

const stakeAccountAddress = (type: 'Basic' | 'Source' | 'Destination' = 'Basic') => ({
	label: `Stake Account ${type !== 'Basic' ? type : ''} Address`,
	details: `${
		type === 'Source'
			? `Stake account you want to be merged.
`
			: ''
	}${
		type === 'Destination'
			? `Stake account you wan to merge into.
`
			: ''
	}You can find it on a Solana explorer from the hash of the broadcasted staking / splitting transaction.`,
	placeholder: 'xxx',
});

export { noteSignAndBroadcast, accountId, walletAddress, integration, transactionHash, amount, stakeAccountAddress };