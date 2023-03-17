import { useContext } from 'react';

import { InputsContext } from '../contexts/InputsContext';

const useInputs = () => {
	const context = useContext(InputsContext);
	if (!context) throw new Error('context used outside a provider');
	return context;
};

export default useInputs;
