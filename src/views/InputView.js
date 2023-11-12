import { Console } from '@woowacourse/mission-utils';
import { QUERY } from '../constants/index.js';

const InputView = {
  async readInputValue(query) {
    const value = await Console.readLineAsync(query);
    return value;
  },
  async readDate() {
    const date = await this.readInputValue(QUERY.reservationDate);
    return date;
  },
  async readOrder() {
    const order = await this.readInputValue(QUERY.order);
    return order;
  },
};

export default InputView;
