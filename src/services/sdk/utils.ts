import { Kiln } from '@kilnfi/sdk';

import { Sdk } from '../../types/sdk';
import { Input } from '../../types/input';
import { OptionInputId } from '../../types/option';

const setupSdk = (sdk: Sdk) => new Kiln({ testnet: sdk.testnet, apiToken: sdk.apiToken });
const searchInput = (inputs: Input[], id: OptionInputId) => inputs.find((i) => i.id === id)?.value;
const debugLog = (header: string, object: any) => {
	console.log(header);
	console.log(JSON.stringify(object, null, 4));
};

export { setupSdk, searchInput, debugLog };
