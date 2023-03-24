import { Option } from '../../../types/option';

import adaTransactions from './ada';
import nearTransactions from './near';
import solTransactions from './sol';
import atomTransactions from './atom';
import dotTransactions from './dot';

const transactions: Option[] = [
  adaTransactions,
  nearTransactions,
  solTransactions,
  atomTransactions,
  dotTransactions
];

export default transactions;
