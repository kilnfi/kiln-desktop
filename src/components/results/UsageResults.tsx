import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import useOptions from '../../hooks/useOptions';
import Textarea from '../ui/Textarea';
import Clipboard from '../ui/Clipboard';

const UsageResults = () => {
	const { lastSelectedOption, isLastAvailableOption } = useOptions();

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2">
				<p className="text-body-3 text-primary">Usage</p>
				<div className="relative">
					<Clipboard
						className="absolute top-2 right-2 h-[37px]"
						content={isLastAvailableOption ? lastSelectedOption!.usage?.sdk || '\n' : '\n'}
					/>
					<SyntaxHighlighter className="rounded !p-4" language="javascript" style={github}>
						{isLastAvailableOption ? lastSelectedOption!.usage?.sdk || '\n' : '\n'}
					</SyntaxHighlighter>
				</div>
			</div>
			{isLastAvailableOption && lastSelectedOption?.note?.sdk && (
				<div className="flex flex-col space-y-2">
					<p className="text-body-3 text-primary">Note</p>
					<div className="rounded bg-pink">
						<Textarea name="" value={lastSelectedOption.note.sdk} />
					</div>
				</div>
			)}
		</div>
	);
};

export default UsageResults;
