import { Option, OptionId } from '../../../../types/option';
import stake from './stake';
import unstake from './unstake';
import getStatus from './getStatus';
import withdrawRewards from './withdrawRewards';
import { labels } from '../config';

const atomTransactions: Option = {
	id: OptionId.txAtom,
	label: labels[OptionId.txAtom],
	subOptions: [stake, unstake, withdrawRewards, getStatus],
};

export default atomTransactions;
