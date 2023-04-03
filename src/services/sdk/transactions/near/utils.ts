import { Kiln } from "@kilnfi/sdk";
import { NearTx } from "@kilnfi/sdk/lib/types/near";

import { SdkIntegration } from "../../../../types/sdk";

const signAndBroadcast = async (k: Kiln, integrations: SdkIntegration[], name: string, tx: NearTx) => {
  const signedTx = await k.near.sign(integrations.find(i => i.name === name), tx);
	const hash = await k.near.broadcast(signedTx);
  return hash;
}

export default signAndBroadcast;
