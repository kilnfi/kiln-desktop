import { createContext, useState } from 'react';

import options from '../data/options';
import { Option } from '../types/option';

type Props = {
	children: any;
};

type OptionsContextType = {
	nextOptions: Option[];
	selectedOptions: Option[];
	lastSelectedOption: Option | undefined;
	isLastAvailableOption: boolean;
	updatePreviousOption: (newOption: string, index: number) => void;
	addNewOption: (newOption: string) => void;
};

const OptionsContext = createContext<OptionsContextType | undefined>(undefined);

const OptionsContextProvider = ({ children }: Props) => {
	const [nextOptions, setNextOptions] = useState<Option[]>(options);
	const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
	const [lastSelectedOption, setLastSelectedOption] = useState<Option | undefined>();
	const [isLastAvailableOption, setIsLastAvailableOption] = useState<boolean>(false);

	const updatePreviousOption = (newOption: string, index: number) => {
		if (newOption !== 'placeholder') {
			let cpy = [...selectedOptions];
			cpy.splice(-cpy.length + index);
			if (index === 0) {
				cpy[index] = options.find((o) => o.id === newOption)!;
			} else {
				cpy[index] = cpy[index - 1].subOptions!.find((o) => o.id === newOption)!;
			}
			setSelectedOptions(cpy);
			setLastSelectedOption(cpy[index]);
			setIsLastAvailableOption(cpy[index]!.subOptions === undefined || cpy[index]!.subOptions!.length === 0);
			setNextOptions(cpy[index].subOptions || []);
		}
	};

	const addNewOption = (newOption: string) => {
		if (newOption !== 'placeholder') {
			let cpy = [...selectedOptions];
			cpy.push(nextOptions.find((o) => o.id === newOption)!);
			setSelectedOptions(cpy);
			setLastSelectedOption(cpy.at(-1));
			setIsLastAvailableOption(cpy.at(-1)!.subOptions === undefined || cpy.at(-1)!.subOptions!.length === 0);
			setNextOptions(nextOptions.find((o) => o.id === newOption)!.subOptions || []);
		}
	};

	return (
		<OptionsContext.Provider
			value={{
				nextOptions,
				selectedOptions,
				lastSelectedOption,
				isLastAvailableOption,
				updatePreviousOption,
				addNewOption,
			}}
		>
			{children}
		</OptionsContext.Provider>
	);
};

export type { OptionsContextType };
export { OptionsContext };
export default OptionsContextProvider;
