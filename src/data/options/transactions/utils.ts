import { OptionInputType } from '../../../types/option';

export const note = (instructions: string[]) => `${instructions.join('\n')}

Then sign the transaction by specifying the integration and the crafted transaction.

Finally, broadcast the signed transaction.`;

export const noteGetStatus = 'Get the transaction status of a broadcasted transaction.';

export const usage = (
	commands: string[],
	token: 'ada' | 'atom' | 'dot' | 'near' | 'sol' | 'xtz',
) => `import { Integration } from "@kilnfi/sdk/lib/types/integrations";
const fs = require('fs');
const apiSecret = fs.readFileSync(__dirname + '/fireblocks_secret.key', 'utf8');

const vault: Integration = {
  provider: 'fireblocks',
  fireblocksApiKey: 'YOUR_API_USER_KEY', // your fireblocks API user key
  fireblocksSecretKey: apiSecret, // your fireblocks private key (generated with your CSR file and your API user)
  vaultId: 7 // your fireblocks vault id
};

${commands.join('\n')}
const txSigned = await k.${token}.sign(vault, tx);
const txHash = await k.${token}.broadcast(txSigned);`;

export const usageGetStatus = (token: 'ada' | 'atom' | 'dot' | 'near' | 'sol' | 'xtz', params?: string) =>
	`const status = await k.${token}.getTxStatus(${params ? params : "'tx_hash'"});`;

export const accountId = {
	label: 'Kiln Account ID',
	details: `From your Kiln organization dashboard, select an account.
In its settings, copy-paste its 'Account ID'.`,
	placeholder: 'xxx',
	type: OptionInputType.text,
};

export const walletAddress = (token: string) => ({
	label: 'Wallet Address',
	details: `From your Fireblocks workspace, select an account.
Choose a wallet holding ${token} tokens and click 'See Deposit Address'.
Copy-paste the 'PERMANENT ADDRESS'.`,
	placeholder: 'xxx',
	type: OptionInputType.text,
});

export const validatorAddress = (name: 'validator' | 'pool' | 'vote account' | 'baker', placeholder: string) => ({
	label: `${name.charAt(0).toUpperCase() + name.slice(1)} ${name === 'validator' || name === 'baker' ? 'Address' : 'ID'}`,
	details: `Address of the ${name}.
To see Kiln's ${name}s, check our protocols documentation.
One of them is ${placeholder}.`,
	placeholder,
	type: OptionInputType.text,
});

export const integration = {
	label: 'Integration',
	details: 'Select an integration you created during the Kiln Connect setup.',
	placeholder: '...',
	type: OptionInputType.text,
};

export const transactionHash = {
	label: 'Transaction Hash',
	details: 'The hash of the broadcasted transaction.',
	placeholder: 'xxx',
	type: OptionInputType.text,
};

export const amount = (token: string, precision?: string, required = true) => ({
	label: `${token} amount`,
	details: `${required ? '' : 'Optional.'} Amount of ${token} tokens.${
		precision
			? `
${precision}`
			: ''
	}`,
	placeholder: '100,000',
	type: OptionInputType.number,
});

export const stashAccountAddress = {
	label: 'Stash Account Address',
	details: `If you don't have a stash account, it is recommended to create one.
If you don't want to, then select your wallet address.`,
	placeholder: 'xxx',
	type: OptionInputType.text,
};

export const controllerAccountAddress = {
	label: 'Controller Account Address',
	details: "If you don't have a controller account, then select your stash account.",
	placeholder: 'xxx',
	type: OptionInputType.text,
};

export const options = (keys: string[], extraNotes: string[] = []) => ({
	label: 'Options',
	details: `Optional. Only for specific setups.

${extraNotes.map((n) => `- ${n}.`).join('\n')}

Don't forget to:
- put the key${keys.length === 1 ? '' : 's'} (${keys.join(', ')}) between quotes.
- not put a comma after the value of ${keys.at(-1)}.`,
	placeholder: `{
${keys.map((k) => `  "${k}": "..."`).join(',\n')}
}`,
	type: OptionInputType.json,
});

export const stakeAccountAddress = (type: 'Basic' | 'Source' | 'Destination' = 'Basic') => ({
	label: `Stake Account ${type !== 'Basic' ? type : ''} Address`,
	details: `${
		type === 'Source'
			? `Stake account you want to be merged.
`
			: ''
	}${
		type === 'Destination'
			? `Stake account you want to merge into.
`
			: ''
	}You can find it on a Solana explorer from the hash of the broadcasted staking / splitting transaction.`,
	placeholder: 'xxx',
	type: OptionInputType.text,
});
