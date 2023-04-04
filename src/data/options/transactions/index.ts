import { Option } from '../../../types/option';

import adaTransactions from './ada';
import nearTransactions from './near';
import solTransactions from './sol';
import atomTransactions from './atom';
import dotTransactions from './dot';
import xtzTransactions from './xtz';

const transactions: Option[] = [
	adaTransactions,
	nearTransactions,
	solTransactions,
	atomTransactions,
	dotTransactions,
	xtzTransactions,
];

export default transactions;
