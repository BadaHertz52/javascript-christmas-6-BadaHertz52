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
  /**
   *
   * @param {string} string : 출력한 문구
   */
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
  /**
   *
   * @param {'appetizer'| 'main'| 'dessert'| 'beverage'} header  : 메누의 타입
   * @param {{ food:FoodName, type:FoodType, price:number}[]} array :
   */
  printMenuByType(menuType, array) {
    this.print(`<${menuType}>`);
    array.forEach((v) =>
      this.print(`${v.food}  ${new Money(v.price).getValue()}`),
    );
    this.printBlankLine();
  },
  /**
   *
   * @param {number} date
   */
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
   * @param {Order} order :
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
   * @param {string} money
   */
  printAmount(type, amount) {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE[type]);
    this.print(amount);
  },
  printNone() {
    this.print(NONE);
  },
  /**
   *
   * @param {string[]} benefitMessages
   */
  printBenefits(benefitMessages) {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE.benefits);
    benefitMessages.forEach((v) => this.print(v));
  },
  /**
   *
   * @param {boolean} isGift
   */
  printGift(isGift) {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE.gift);
    this.print(isGift ? GIFT : NONE);
  },
  /**
   *
   * @param {string} message : 배지를 수여할 경우 배지 모양, 그렇지 않을 경우에는 "없음"
   */
  printBadge(message) {
    this.printBlankLine();
    this.print(OUTPUT_HEADER_MESSAGE.badge);
    this.print(message);
  },
};

export default OutputView;
