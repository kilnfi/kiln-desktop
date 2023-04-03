import { Option, OptionId } from '../../../../types/option';
import stake from './stake';
import unstake from './unstake';
import withdrawRewards from './withdrawRewards';
import getStatus from './getStatus';
import { labels } from '../config';

const adaTransactions: Option = {
	id: OptionId.txAda,
	label: labels[OptionId.txAda],
	subOptions: [stake, unstake, withdrawRewards, getStatus],
};

export default adaTransactions;
