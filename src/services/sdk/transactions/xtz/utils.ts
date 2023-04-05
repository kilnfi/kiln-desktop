import { Kiln } from '@kilnfi/sdk';
import { XtzTx } from '@kilnfi/sdk/lib/types/xtz';

import { SdkIntegration } from '../../../../types/sdk';

const signAndBroadcast = async (k: Kiln, integrations: SdkIntegration[], name: string, tx: XtzTx) => {
	const signedTx = await k.xtz.sign(
		integrations.find((i) => i.name === name),
		tx,
	);
	const hash = await k.xtz.broadcast(signedTx);
	return hash;
};

export default signAndBroadcast;
