import { Option, OptionId } from '../../../../types/option';

import stake from './stake';
import deactivate from './deactivate';
import withdraw from './withdraw';
import split from './split';
import merge from './merge';
import getStatus from './getStatus';

const solTransactions: Option = {
	id: OptionId.txSol,
	label: 'on Solana',
	subOptions: [stake, deactivate, withdraw, split, merge, getStatus],
};

export default solTransactions;
