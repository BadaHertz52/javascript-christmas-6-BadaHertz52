import { Console } from '@woowacourse/mission-utils';
import {
  GIFT,
  MENU_UNIT,
  MESSAGE,
  OUTPUT_HEADER_MESSAGE,
} from '../constants/index.js';
import { getEventPreviewMessage } from '../utils/index.js';

const OutputView = {
  print(string) {
    Console.print(string);
  },
  printBlankLine() {
    this.print('');
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
   * @param {'amountBeforeDiscount'|'totalBenefitAmount'|'amountAfterDiscount'} type
   * @param {*} money
   */
  printAmount(type, money) {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE[type]);
    this.print(money);
  },
  printBenefits(benefitMessages) {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE.benefits);
    benefitMessages.forEach((v) => this.print(v));
  },
  printGift() {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE.gift);
    this.print(GIFT);
  },
};

export default OutputView;
