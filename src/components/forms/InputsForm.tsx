import { useEffect, useState } from 'react';

import Input from '../ui/Input';
import Button from '../ui/Button';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import useOptions from '../../hooks/useOptions';
import useInputs from '../../hooks/useInputs';
import ResultModal from '../modals/ResultModal';
import { OptionInputType } from '../../types/option';

const InputsForm = () => {
	const [result, setResult] = useState<string | undefined>(undefined);
	const [isResultOpen, setIsResultOpen] = useState<boolean>(false);
	const [isProcessing, setIsProcessing] = useState<boolean>(false);
	const [areInputsValid, setAreInputsValid] = useState<boolean>(false);

	const { isLastAvailableOption, lastSelectedOption } = useOptions();
	const { sdk, inputs, updateInputs } = useInputs();

	const validJsonFormat = (content: string | undefined) => {
		if (!content || content === '') return true;

		try {
			JSON.parse(content);
			return true;
		} catch (error) {
			return false;
		}
	};

	useEffect(() => {
		const checkInputs = () => {
			if (!sdk.apiToken) return false;
			return lastSelectedOption!.inputs?.sdk.every((input) => {
				if (input.required && input.id.split('-').at(-1) === 'integration') {
					const integration = inputs.find((i) => i.id === input.id);
					if (
						!integration ||
						(integration && !sdk.integrations.find((i) => i.name === integration.value)?.fireblocksSecretKey)
					)
						return false;
				} else if (input.required) {
					const i = inputs.find((i) => i.id === input.id);
					if (!i || !i.value || i.value === 'placeholder') return false;
				} else if (input.type === OptionInputType.json) {
					const i = inputs.find((i) => i.id === input.id);
					if (i) return validJsonFormat(i.value as string);
				}
				return true;
			});
		};

		if (isLastAvailableOption) {
			setAreInputsValid(checkInputs());
		}
	}, [isLastAvailableOption, sdk, inputs]);

	useEffect(() => {
		if (result && !isProcessing) setIsResultOpen(true);
	}, [result, isProcessing]);

	return (
		<>
			{isLastAvailableOption && (
				<div className="flex flex-col space-y-2">
					<p className="text-body-3 text-primary">Give a try</p>
					{lastSelectedOption!.inputs?.sdk?.map((input, index) => {
						if (input.label === 'Integration')
							return (
								<Select
									key={index.toString()}
									name={input.id}
									label={input.label}
									details={input.details}
									required={input.required}
									onChange={(e) => updateInputs({ id: input.id, value: e.target.value })}
									value={inputs.find((i) => i.id === input.id)?.value as string}
								>
									<option value="placeholder">{input.placeholder}</option>
									{sdk.integrations.map((integration, idx) => (
										<option key={index.toString() + '-' + idx.toString()} value={integration.name}>
											{integration.name}
										</option>
									))}
								</Select>
							);
						if (input.type === OptionInputType.number)
							return (
								<Input
									key={index.toString()}
									name={input.id}
									label={input.label}
									details={input.details}
									placeholder={input.placeholder}
									type="number"
									required={input.required}
									onChange={(value) => updateInputs({ id: input.id, value })}
									value={inputs.find((i) => i.id === input.id)?.value as number}
								/>
							);
						if (input.type === OptionInputType.text)
							return (
								<Input
									key={index.toString()}
									name={input.id}
									label={input.label}
									details={input.details}
									placeholder={input.placeholder}
									type="text"
									required={input.required}
									onChange={(e) => updateInputs({ id: input.id, value: e.target.value })}
									value={(inputs.find((i) => i.id === input.id)?.value as string) || ''}
								/>
							);
						if (input.type === OptionInputType.textArray)
							return (
								<Textarea
									key={index.toString()}
									name={input.id}
									label={input.label}
									details={input.details}
									placeholder={input.placeholder}
									readOnly={false}
									required={input.required}
									onChange={(e) =>
										updateInputs({
											id: input.id,
											value: e.target.value.split(input.separator),
										})
									}
									value={(inputs.find((i) => i.id === input.id)?.value as string[])?.join(input.separator)}
								/>
							);
						if (input.type === OptionInputType.json)
							return (
								<Textarea
									key={index.toString()}
									name={input.id}
									label={input.label}
									details={input.details}
									placeholder={input.placeholder}
									readOnly={false}
									onChange={(e) => {
										try {
											const json = JSON.parse(e.target.value);
											updateInputs({
												id: input.id,
												value: JSON.stringify(json, undefined, 4),
											});
										} catch (error) {
											updateInputs({ id: input.id, value: e.target.value });
										}
									}}
									value={inputs.find((i) => i.id === input.id)?.value as string}
									required={input.required}
									validFormat={validJsonFormat}
								/>
							);
					})}
					<Button
						onClick={async () => {
							if (lastSelectedOption!.functions?.sdk) {
								try {
									setIsProcessing(true);
									const res = await window.services[lastSelectedOption!.functions.sdk](sdk, inputs);
									// console.log(res);
									setResult(res);
									setIsProcessing(false);
								} catch (error) {
									console.error(error);
									setResult(error);
									setIsProcessing(false);
								}
							}
						}}
						disabled={!areInputsValid || isProcessing}
					>
						{!isProcessing ? (
							lastSelectedOption!.label
						) : (
							<>
								<svg
									className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Loading...
							</>
						)}
					</Button>
					<ResultModal
						isOpen={isResultOpen}
						onClose={() => {
							setIsResultOpen(false);
							setResult(undefined);
						}}
						title="Result"
						result={result}
					/>
				</div>
			)}
		</>
	);
};

export default InputsForm;
