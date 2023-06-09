import { createRoot } from 'react-dom/client';

import './styles/base.css';
import Home from './pages/Home';

const render = () => {
	const container = document.getElementById('app');
	const root = createRoot(container);
	root.render(<Home />);
};

render();
