import { Option, OptionId } from '../../../../types/option';
import bond from './bond';
import bondExtra from './bondExtra';
import chill from './chill';
import nominate from './nominate';
import rebond from './rebond';
import setController from './setController';
import setPayee from './setPayee';
import unbond from './unbond';
import withdrawUnbonded from './withdrawUnbonded';
import getStatus from './getStatus';
import { labels } from '../config';

const dotTransactions: Option = {
	id: OptionId.txDot,
	label: labels[OptionId.txDot],
	subOptions: [bond, bondExtra, nominate, rebond, setController, setPayee, chill, unbond, withdrawUnbonded, getStatus],
};

export default dotTransactions;
