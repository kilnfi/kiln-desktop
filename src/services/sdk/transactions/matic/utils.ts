import { Kiln } from '@kilnfi/sdk';
import { MaticTx } from '@kilnfi/sdk/lib/types/matic';

import { SdkIntegration } from '../../../../types/sdk';

const signAndBroadcast = async (k: Kiln, integrations: SdkIntegration[], name: string, tx: MaticTx) => {
	const signedTx = await k.matic.sign(
		integrations.find((i) => i.name === name),
		tx,
	);
	const hash = await k.matic.broadcast(signedTx);
	return hash;
};

export default signAndBroadcast;
