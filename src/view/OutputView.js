import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Message.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printMenu() {
    Console.print('<주문 메뉴>');
    // ...
  },
  // ...
};

export default OutputView;
