import Tooltip from '../ui/Tooltip';
import useInputs from '../../hooks/useInputs';

const ClearCacheButton = () => {
	const { clearSdk, clearInputs } = useInputs();

	const clearCache = () => {
		clearSdk();
		clearInputs();
	};

	return (
		<div className="m-auto flex items-center">
			<div className="underline cursor-pointer" onClick={clearCache}>
				<p className="text-caption-3 text-gray-800 ml-1">🗑️ Clear cache</p>
			</div>
			<Tooltip className="ml-1 z-10">
				Kiln Desktop stores your inputs (except the Fireblocks Secret Key) inside a cache, that only it has access to.
				<br />
				Click on the left bin if you want to clear this cache.
			</Tooltip>
		</div>
	);
};

export default ClearCacheButton;
