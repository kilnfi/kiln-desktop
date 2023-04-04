import { Option, OptionId } from '../../../../types/option';
import approve from './approve';
import buyVoucher from './buyVoucher';
import sellVoucher from './sellVoucher';
import restakeRewards from './restakeRewards';
import withdrawRewards from './withdrawRewards';
import unstake from './unstake';
import getStatus from './getStatus';
import { labels } from '../config';

const maticTransactions: Option = {
	id: OptionId.txMatic,
	label: labels[OptionId.txMatic],
	subOptions: [approve, buyVoucher, sellVoucher, restakeRewards, withdrawRewards, unstake, getStatus],
};

export default maticTransactions;
