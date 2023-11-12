import { Console } from '@woowacourse/mission-utils';
import {
  DISCOUNT_SIGN,
  MENU_UNIT,
  MESSAGE,
  MONEY_UNIT,
  OUTPUT_HEADER_MESSAGE,
} from '../constants/index.js';
import {
  getEventPreviewMessage,
  getMenuErrorMessage,
  getReservationErrorMessage,
} from '../utils/index.js';

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
   * @param {{food:string, type:string, price:number ,numberOfFood: number}[]} order : ;
   */
  printOrder(order) {
    this.print(OUTPUT_HEADER_MESSAGE.order);
    order.forEach((v) => this.print(`${v.food} ${v.numberOfFood}${MENU_UNIT}`));
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
  /**
   *
   * @param {"range"|"type"} error  :예약 방문일에 대한 오류 중 해당되는 오류로, ERROR_MESSAGE.reservation의 property  key 값
   */
  printReservationErrorMessage() {
    this.print(getReservationErrorMessage());
  },
  /**
   *
   * @param {"minNumber"|"maxNumber"|"noMenuDelimiter"|
   * "wrongType"|"noOnlyBeverage"} error  :메뉴 입력에 대한 오류 중 해당되는 오류로, ERROR_MESSAGE.menu의 property key 값
   */
  printMenuErrorMessage(error) {
    this.print(getMenuErrorMessage(error));
  },
};

export default OutputView;
