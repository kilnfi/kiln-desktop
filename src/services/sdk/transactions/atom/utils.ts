import { Kiln } from '@kilnfi/sdk';
import { AtomTx } from '@kilnfi/sdk/lib/types/atom';

import { SdkIntegration } from '../../../../types/sdk';

const signAndBroadcast = async (k: Kiln, integrations: SdkIntegration[], name: string, tx: AtomTx) => {
	const signedTx = await k.atom.sign(
		integrations.find((i) => i.name === name),
		tx,
	);
	const hash = await k.atom.broadcast(signedTx);
	return hash;
};

export default signAndBroadcast;
