import { Console } from '@woowacourse/mission-utils';
import { QUERY } from '../constants/index.js';

const InputView = {
  /**
   * @param {string} query : 입력 안내 문구
   * @return {Promise<string>}
   */
  async readInputValue(query) {
    const value = await Console.readLineAsync(query);
    return value.replaceAll(' ', '');
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
