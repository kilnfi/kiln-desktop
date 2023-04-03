import { Option, OptionId } from '../../../../types/option';
import stake from './stake';
import deactivate from './deactivate';
import withdraw from './withdraw';
import split from './split';
import merge from './merge';
import getStatus from './getStatus';
import { labels } from '../config';

const solTransactions: Option = {
	id: OptionId.txSol,
	label: labels[OptionId.txSol],
	subOptions: [stake, deactivate, withdraw, split, merge, getStatus],
};

export default solTransactions;
