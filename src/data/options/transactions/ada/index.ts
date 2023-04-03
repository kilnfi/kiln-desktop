import { Option, OptionId } from '../../../../types/option';
import stake from './stake';
import unstake from './unstake';
// import withdraw from './withdraw';
import getStatus from './getStatus';
import { labels } from '../config';

const adaTransactions: Option = {
	id: OptionId.txAda,
	label: labels[OptionId.txAda],
	subOptions: [stake, unstake, getStatus],
};

export default adaTransactions;
