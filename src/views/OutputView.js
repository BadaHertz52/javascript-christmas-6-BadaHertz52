import { Console } from '@woowacourse/mission-utils';
import {
  DISCOUNT_SIGN,
  MENU_UNIT,
  MESSAGE,
  MONEY_UNIT,
  OUTPUT_HEADER_MESSAGE,
} from '../constants/index.js';
import { getEventPreviewMessage } from '../utils/index.js';

const OutputView = {
  print(string) {
    Console.print(string);
  },
  printGreetings() {
    this.print(MESSAGE.greetings);
  },
  printEventPreview(date) {
    this.print(getEventPreviewMessage(date));
  },
  printEventTarget() {
    this.print(MESSAGE.event.target);
  },
  /**
   *
   * @param {{food:string, type:string, price:number ,numberOfOrder: number}[]} order : ;
   */
  printOrder(order) {
    this.print(OUTPUT_HEADER_MESSAGE.order);
    order.forEach((v) =>
      this.print(`${v.food} ${v.numberOfOrder}${MENU_UNIT}`),
    );
  },
  printMoney(money, isDiscount = false) {
    this.print(`${isDiscount ? DISCOUNT_SIGN : ''}${money}${MONEY_UNIT}`);
  },
  /**
   *
   * @param {"amountBeforeDiscount"|"totalBenefitAmount"|amountAfterDiscount"} type
   * @param {*} money
   */
  printAmount(type, money) {
    this.print(OUTPUT_HEADER_MESSAGE[type]);
    this.printMoney(money);
  },
};

export default OutputView;
