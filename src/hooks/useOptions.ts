import { useContext } from 'react';

import { OptionsContext } from '../contexts/OptionsContext';

const useOptions = () => {
	const context = useContext(OptionsContext);
	if (!context) throw new Error('context used outside a provider');
	return context;
};

export default useOptions;
