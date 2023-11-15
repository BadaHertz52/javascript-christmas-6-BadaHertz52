import { Console } from '@woowacourse/mission-utils';
import {
  GIFT,
  MENU_UNIT,
  MESSAGE,
  NONE,
  OUTPUT_HEADER_MESSAGE,
} from '../constants/index.js';
import { getEventPreviewMessage } from '../utils/index.js';
import { Money } from '../controllers/index.js';

const OutputView = {
  print(string) {
    Console.print(string);
  },
  printBlankLine() {
    this.print('');
  },
  printGreetings() {
    this.print(MESSAGE.greetings);
    this.printBlankLine();
  },
  printMenuByType(header, array) {
    this.print(`<${header}>`);
    array.forEach((v) =>
      this.print(`${v.food}  ${new Money(v.price).getValue()}`),
    );
    this.printBlankLine();
  },
  printEventPreview(date) {
    this.printBlankLine();
    this.print(getEventPreviewMessage(date));
  },
  printNotesOnEvent() {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE.notesOnEvent);
    this.printBlankLine();
    MESSAGE.notesOnEvent.forEach((v) => this.print(v));
    this.printBlankLine();
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
  printAmount(type, amount) {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE[type]);
    this.print(amount);
  },
  printNone() {
    this.print(NONE);
  },
  printBenefits(benefitMessages) {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE.benefits);
    benefitMessages.forEach((v) => this.print(v));
  },
  printGift(isGift) {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE.gift);
    this.print(isGift ? GIFT : NONE);
  },
  printBadge(message) {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE.badge);
    this.print(message);
  },
};

export default OutputView;
