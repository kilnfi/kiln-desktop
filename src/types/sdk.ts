type SdkIntegration = {
	name: string;
	provider: 'fireblocks';
	fireblocksApiKey: string;
	fireblocksSecretKey: string;
	vaultAccountId: string;
};

type SdkRpcs = {
	ethereum?: string;
	atom?: string;
	dot?: string;
	near?: string;
	solana?: string;
};

type Sdk = {
	testnet: boolean;
	apiToken: string;
	integrations: SdkIntegration[];
	rpcs: SdkRpcs;
};

export type { SdkIntegration, SdkRpcs, Sdk };
