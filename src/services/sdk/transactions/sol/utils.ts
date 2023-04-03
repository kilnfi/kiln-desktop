import { Kiln } from '@kilnfi/sdk';
import { SolTx } from '@kilnfi/sdk/lib/types/sol';

import { SdkIntegration } from '../../../../types/sdk';

const signAndBroadcast = async (k: Kiln, integrations: SdkIntegration[], name: string, tx: SolTx) => {
	const signedTx = await k.sol.sign(
		integrations.find((i) => i.name === name),
		tx,
	);
	const hash = await k.sol.broadcast(signedTx);
	return hash;
};

export default signAndBroadcast;
