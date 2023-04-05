import { Kiln } from '@kilnfi/sdk';
import { DotTx } from '@kilnfi/sdk/lib/types/dot';

import { SdkIntegration } from '../../../../types/sdk';

const signAndBroadcast = async (k: Kiln, integrations: SdkIntegration[], name: string, tx: DotTx) => {
	const signedTx = await k.dot.sign(
		integrations.find((i) => i.name === name),
		tx,
	);
	const hash = await k.dot.broadcast(signedTx);
	return hash;
};

export default signAndBroadcast;
