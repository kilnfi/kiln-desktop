import { Option, OptionId } from '../../../../types/option';
import stake from './stake';
import unstake from './unstake';
import withdraw from './withdraw';
import getStatus from './getStatus';
import { labels } from '../config';

const adaTransactions: Option = {
	id: OptionId.txNear,
	label: labels[OptionId.txNear],
	subOptions: [stake, unstake, withdraw, getStatus],
};

export default adaTransactions;
