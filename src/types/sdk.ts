type SdkIntegration = {
	name: string;
	provider: 'fireblocks';
	fireblocksApiKey: string;
	fireblocksSecretKey: string;
	vaultId: number;
};

type Sdk = {
	testnet: boolean;
	apiToken: string;
	integrations: SdkIntegration[];
};

export type { SdkIntegration, Sdk };
