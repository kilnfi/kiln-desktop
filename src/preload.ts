// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';
import { Input } from './types/input';
import { Sdk } from './types/sdk';
import { OptionFunctionSdk } from './types/option';
import { UtilFunction } from './types/util';

contextBridge.exposeInMainWorld('services', {
	[OptionFunctionSdk.txAdaStake]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txAdaStake, sdk, inputs),
	[OptionFunctionSdk.txAdaUnstake]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txAdaUnstake, sdk, inputs),
	[OptionFunctionSdk.txAdaGetStatus]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txAdaGetStatus, sdk, inputs),
	[OptionFunctionSdk.txNearStake]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txNearStake, sdk, inputs),
	[OptionFunctionSdk.txNearUnstake]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txNearUnstake, sdk, inputs),
	[OptionFunctionSdk.txNearGetStatus]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txNearGetStatus, sdk, inputs),
	[OptionFunctionSdk.txSolStake]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txSolStake, sdk, inputs),
	[OptionFunctionSdk.txSolDeactivate]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txSolDeactivate, sdk, inputs),
	[OptionFunctionSdk.txSolWithdraw]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txSolWithdraw, sdk, inputs),
	[OptionFunctionSdk.txSolSplit]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txSolSplit, sdk, inputs),
	[OptionFunctionSdk.txSolMerge]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txSolMerge, sdk, inputs),
	[OptionFunctionSdk.txSolGetStatus]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txSolGetStatus, sdk, inputs),
	[OptionFunctionSdk.txAtomStake]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txAtomStake, sdk, inputs),
	[OptionFunctionSdk.txAtomUnstake]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txAtomUnstake, sdk, inputs),
	[OptionFunctionSdk.txAtomGetStatus]: async (sdk: Sdk, inputs: Input[]): Promise<any> =>
		ipcRenderer.invoke(OptionFunctionSdk.txAtomGetStatus, sdk, inputs),
});

contextBridge.exposeInMainWorld('utils', {
	[UtilFunction.openInBrowser]: async (url: string): Promise<void> =>
		ipcRenderer.invoke(UtilFunction.openInBrowser, url),
});
