import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readDate(query) {
    const value = await Console.readLineAsync(query);
    return value;
  },
};
export default InputView;
