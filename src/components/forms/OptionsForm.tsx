import Options from '../../data/options';
import Select from '../ui/Select';
import useOptions from '../../hooks/useOptions';

const OptionsForm = () => {
	const { nextOptions, selectedOptions, updatePreviousOption, addNewOption } = useOptions();

	return (
		<div className="flex flex-col space-y-2">
			<p className="text-body-3 text-primary">I wan't to:</p>
			<div className="flex flex-col space-y-2">
				{selectedOptions.map((o, i) => (
					<Select
						key={i.toString()}
						name={o.id}
						onChange={(event) => updatePreviousOption(event.target.value, i)}
						value={o.id}
						className="w-full"
					>
						{i === 0
							? Options.map((s, j) => (
									<option key={j.toString()} value={s.id}>
										{s.label}
									</option>
							  ))
							: selectedOptions[i - 1].subOptions!.map((s, j) => (
									<option key={j.toString()} value={s.id}>
										{s.label}
									</option>
							  ))}
					</Select>
				))}
				{nextOptions.length > 0 ? (
					<Select
						name={'Next option'}
						onChange={(event) => addNewOption(event.target.value)}
						value={'placeholder'}
						className="w-full"
					>
						<option value="placeholder">...</option>
						{nextOptions.map((o, i) => (
							<option key={i.toString()} value={o.id}>
								{o.label}
							</option>
						))}
					</Select>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default OptionsForm;
