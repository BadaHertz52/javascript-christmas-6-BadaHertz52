import { Console } from '@woowacourse/mission-utils';
import {
  MENU_UNIT,
  MESSAGE,
  OUTPUT_HEADER_MESSAGE,
} from '../constants/index.js';
import { Money } from '../models/index.js';
import { getEventPreviewMessage } from '../utils/index.js';

const OutputView = {
  print(string) {
    Console.print(string);
  },
  printGreetings() {
    this.print(MESSAGE.greetings);
  },
  printEventPreview(date) {
    this.printBlankLine();
    this.print(getEventPreviewMessage(date));
    this.printBlankLine();
  },
  printEventTarget() {
    this.print(MESSAGE.event.target);
  },
  /**
   *
   * @param {{food:string, type:string, price:number ,numberOfOrder: number}[]} order : ;
   */
  printOrder(order) {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE.order);
    order.forEach((v) =>
      this.print(`${v.food} ${v.numberOfOrder}${MENU_UNIT}`),
    );
  },
  /**
   *
   * @param {number} money
   */
  printMoney(money) {
    this.print(new Money(money).getValue());
  },
  printBlankLine() {
    this.print('');
  },
  /**
   *
   * @param {'amountBeforeDiscount'|'totalBenefitAmount'|'amountAfterDiscount'} type
   * @param {*} money
   */
  printAmount(type, money) {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE[type]);
    this.printMoney(money);
  },
};

export default OutputView;
