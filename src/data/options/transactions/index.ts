import { Option } from '../../../types/option';
import adaTransactions from './ada';
import nearTransactions from './near';
import solTransactions from './sol';
import atomTransactions from './atom';
import dotTransactions from './dot';
import xtzTransactions from './xtz';
import maticTransactions from './matic';

const transactions: Option[] = [
	adaTransactions,
	atomTransactions,
	dotTransactions,
	maticTransactions,
	nearTransactions,
	solTransactions,
	xtzTransactions,
];

export default transactions;
