import { Console } from '@woowacourse/mission-utils';
import {
  DISCOUNT_SIGN,
  EVENT,
  HEADER,
  MESSAGE,
  NONE,
  UNIT,
} from '../constants/index.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printPreview(date) {
    const dateMessage = `12월 ${date}일`;
    OutputView.print(`\n${dateMessage}${MESSAGE.previewHeader}`);
  },
  /**
   *
   *  @param {{food:string,number: number}[]} order : 주문 목록
   */
  printMenu(order) {
    const message = order
      .map((v) => `${v.food} ${v.number}${UNIT.goods}\n`)
      .join('');
    this.print(`\n${HEADER.menu}`);
    this.print(message);
  },
  /**
   * @param {number} number
   * @param {boolean} isDiscount
   */
  changeNumberToMoney(number, isDiscount) {
    const money = `${isDiscount ? DISCOUNT_SIGN : ''}${number.toLocaleString(
      'ko-KR',
    )}${UNIT.currency}`;
    return money;
  },
  /**
   * @param {"beforeDiscountAmount"|"afterDiscountAmount"|"totalBenefits"} type 
   * @param {number} number
   * @param {boolean} isDiscount

   */
  printAmount(type, number, isDiscount) {
    this.print(`\n${HEADER[type]}`);
    this.print(`${this.changeNumberToMoney(number, isDiscount)}\n`);
  },
  printGift(gift) {
    this.print(`\n${HEADER.gift}`);
    this.print(gift ? EVENT.gift.goods : NONE);
  },
  /**
   *
   * @param { {dDay: number,weekday: number,weekend: number,special: number,gift: number}} benefits
   */
  printBenefits(benefits) {
    const { dDay, weekday, weekend, special, gift } = benefits;
    const message = [];
    if (dDay)
      message.push(
        `${EVENT.dDay.name}: ${this.changeNumberToMoney(dDay, true)}`,
      );
    if (weekday)
      message.push(
        `${EVENT.weekday.name}: ${this.changeNumberToMoney(weekday, true)}`,
      );
    if (weekend)
      message.push(
        `${EVENT.weekend.name}: ${this.changeNumberToMoney(weekend, true)}`,
      );
    if (special)
      message.push(
        `${EVENT.special.name}: ${this.changeNumberToMoney(special, true)}`,
      );
    if (gift)
      message.push(
        `${EVENT.gift.name}: ${this.changeNumberToMoney(gift, true)}`,
      );

    this.print(`\n${HEADER.benefit}`);
    message[0] ? this.print(message.join(`\n`)) : this.print(NONE);
  },
  printBadge(badge) {
    this.print(`\n${HEADER.badge}`);
    this.print(badge);
  },
};

export default OutputView;
