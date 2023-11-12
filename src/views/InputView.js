import { Console } from '@woowacourse/mission-utils';
import { QUERY } from '../constants/index.js';

const InputView = {
  async readInputValue(query) {
    const value = await Console.readLineAsync(query);
    return value;
  },
  async readDate() {
    return await this.readInputValue(QUERY.reservationDate);
  },
  async readOrder() {
    return await this.readInputValue(QUERY.order);
  },
};

export default InputView;
