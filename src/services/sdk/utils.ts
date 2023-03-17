import { Kiln } from '@kilnfi/sdk';

import { Sdk } from '../../types/sdk';
import { Input } from '../../types/input';
import { OptionInputId } from '../../types/option';

const setupSdk = (sdk: Sdk) => new Kiln(sdk);
const searchInput = (inputs: Input[], id: OptionInputId) => inputs.find((i) => i.id === id)?.value;
const logInfo = (message: string) => console.log(`${new Date()} [INFO] ${message}`);
const logSuccess = (message: string) => console.log(`${new Date()} [SUCCESS] ${message}`);
const logWarning = (message: string) => console.log(`${new Date()} [WARNING] ${message}`);
const logError = (message: string) => console.error(`${new Date()} [ERROR] ${message}`);

export { setupSdk, searchInput, logInfo, logSuccess, logWarning, logError };