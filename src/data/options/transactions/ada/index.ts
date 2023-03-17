import { Option, OptionId } from '../../../../types/option';

import stake from './stake';
import unstake from './unstake';
import getStatus from './getStatus';

const adaTransactions: Option = {
	id: OptionId.txAda,
	label: 'on Cardano',
	subOptions: [stake, unstake, getStatus],
};

export default adaTransactions;
