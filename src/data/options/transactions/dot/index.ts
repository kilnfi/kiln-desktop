import { Option, OptionId } from '../../../../types/option';
import bond from './bond';
import extraBond from './extraBond';
import chill from './chill';
import nominate from './nominate';
import rebond from './rebond';
import setController from './setController';
import setPayee from './setPayee';
import unbond from './unbond';
import withdraw from './withdraw';
import getStatus from './getStatus';
import { labels } from '../config';

const dotTransactions: Option = {
	id: OptionId.txDot,
	label: labels[OptionId.txDot],
	subOptions: [bond, extraBond, nominate, rebond, setController, setPayee, chill, unbond, withdraw, getStatus],
};

export default dotTransactions;
