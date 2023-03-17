import { Input } from '../input';
import { OptionFunctionSdk } from '../option';
import { UtilFunction } from '../util';
import { Sdk } from '../sdk';

export type Services = Record<OptionFunctionSdk, (sdk: Sdk, inputs: Input[]) => Promise<any>>;
export type Utils = Record<UtilFunction, (param: any) => Promise<any>>;

declare global {
	interface Window {
		services: Services;
		utils: Utils;
	}
}
