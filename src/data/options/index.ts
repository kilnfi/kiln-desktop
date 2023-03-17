import { Option, OptionId } from "../../types/option";

import transactions from "./transactions";

const options: Option[] = [
  { id: OptionId.tx, label: "craft transactions", subOptions: transactions },
];

export default options;