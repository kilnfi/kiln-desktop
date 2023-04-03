import { Kiln } from "@kilnfi/sdk";
import { AdaTx } from "@kilnfi/sdk/lib/types/ada";

import { SdkIntegration } from "../../../../types/sdk";

const signAndBroadcast = async (k: Kiln, integrations: SdkIntegration[], name: string, tx: AdaTx) => {
  const signedTx = await k.ada.sign(integrations.find(i => i.name === name), tx);
	const hash = await k.ada.broadcast(signedTx);
  return hash;
}

export default signAndBroadcast;
