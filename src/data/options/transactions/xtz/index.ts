import { Option, OptionId } from '../../../../types/option';
import stake from './stake';
import unstake from './unstake';
import getStatus from './getStatus';
import { labels } from '../config';

const xtzTransactions: Option = {
	id: OptionId.txXtz,
	label: labels[OptionId.txXtz],
	subOptions: [stake, unstake, getStatus],
};

export default xtzTransactions;
