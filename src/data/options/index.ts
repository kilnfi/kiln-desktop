import { Option, OptionId } from '../../types/option';
import transactions from './transactions';
import { labels } from './transactions/config';

const options: Option[] = [{ id: OptionId.tx, label: labels[OptionId.tx], subOptions: transactions }];

export default options;
