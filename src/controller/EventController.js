import { EVENT_MIN_AMOUNT } from '../constants/index.js';
import {
  DDayEvent,
  GiftEvent,
  SpecialEvent,
  WeekdayEvent,
  WeekendEvent,
} from '../model/index.js';

class EventController {
  #isEventTarget = false;
  #benefits = {
    dDay: 0,
    weekday: 0,
    weekend: 0,
    special: 0,
    gift: 0,
  };
  /**
   * @param {number}beforeDiscountAmount : 할인 전 총 금액
   * @param {number} date : 방문 일자
   * @param {{food:string,number: number}[]} order : 주문 목록
   */
  constructor(beforeDiscountAmount, date, order) {
    this.#checkEventTarget(beforeDiscountAmount);
    if (this.#isEventTarget)
      this.#setBenefits(date, order, beforeDiscountAmount);
  }
  #checkEventTarget(beforeDiscountAmount) {
    this.#isEventTarget = beforeDiscountAmount >= EVENT_MIN_AMOUNT;
  }
  #setBenefits(date, order, beforeDiscountAmount) {
    this.#benefits = {
      dDay: new DDayEvent(date).getDiscount(),
      weekday: new WeekdayEvent(date, order).getDiscount(),
      weekend: new WeekendEvent(date, order).getDiscount(),
      special: new SpecialEvent(date).getDiscount(),
      gift: new GiftEvent(beforeDiscountAmount).getDiscount(),
    };
  }
  getBenefits() {
    return this.#benefits;
  }
}

export default EventController;
