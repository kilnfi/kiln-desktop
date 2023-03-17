import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ExecutionResult = () => {
	return (
		<div className="flex flex-col space-y-2">
			<p className="text-body-3 text-primary">Result</p>
			<SyntaxHighlighter language="javascript" style={github}>
				{'\n'}
			</SyntaxHighlighter>
		</div>
	);
};

export default ExecutionResult;
