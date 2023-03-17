import { Option } from '../../../types/option';

import adaTransactions from './ada';
import nearTransactions from './near';
import solTransactions from './sol';
import atomTransactions from './atom';

const transactions: Option[] = [adaTransactions, nearTransactions, solTransactions, atomTransactions];

export default transactions;
