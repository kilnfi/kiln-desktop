import { Option, OptionId } from '../../../../types/option';

import stake from './stake';
import unstake from './unstake';
import getStatus from './getStatus';

const atomTransactions: Option = {
	id: OptionId.txAtom,
	label: 'on Cosmos Hub',
	subOptions: [stake, unstake, getStatus],
};

export default atomTransactions;
