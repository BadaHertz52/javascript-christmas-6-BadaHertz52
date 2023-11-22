import { EVENT_THRESHOLD, EVENT_NAMES } from '../constants/index.js';
import {
  GiftEvent,
  SpecialEvent,
  WeekDayEvent,
  WeekendEvent,
  XmasDDayEvent,
} from '../models/index.js';

class EventController {
  #isEventApplied = false;
  /**
   * @type {undefined|Benefits};
   * @description  type Benefits ={ event:   | '크리스마스 디데이 할인'| '평일 할인'| '주말 할인'| '특별 할인'| '증정 이벤트'; discount: number}[]
   */
  #benefits;
  /**
   *
   * @param {number} date
   * @param {Order} order
   * @param {number} amountBeforeDiscount
   */
  constructor(date, order, amountBeforeDiscount) {
    this.#isEventTarget(amountBeforeDiscount);
    if (this.#isEventApplied) {
      this.#getXmasDDayDiscount(date);
      this.#getWeekDayDiscount(date, order);
      this.#getWeekendDiscount(date, order);
      this.#getSpecialDiscount(date);
      this.#getGiftBenefit(amountBeforeDiscount);
    }
  }
  //이벤트 적용 여부 판단
  /**
   *
   * @param {number} amountBeforeDiscount
   */
  #isEventTarget(amountBeforeDiscount) {
    if (amountBeforeDiscount >= EVENT_THRESHOLD.minPurchaseForEvent)
      this.#isEventApplied = true;
  }
  /**
   * @param {undefined|number} discount
   * @param {"크리스마시 디데이 할인"|"평일 할인"|"주말 할인"|"특별 할인"|"증정 이벤트" }event
   */
  #addBenefit(discount, event) {
    if (discount) {
      const newBenefit = { event: event, discount: discount };
      this.#benefits
        ? this.#benefits.push(newBenefit)
        : (this.#benefits = [newBenefit]);
    }
  }
  /**
   *
   * @param {number} date
   */
  #getXmasDDayDiscount(date) {
    const discount = new XmasDDayEvent(date).getDiscount();
    this.#addBenefit(discount, EVENT_NAMES.xmasDDayEvent);
  }
  /**
   * @param {number} date
   * @param {Order} order
   */
  #getWeekDayDiscount(date, order) {
    const discount = new WeekDayEvent(date, order).getDiscount();
    this.#addBenefit(discount, EVENT_NAMES.weekDayEvent);
  }
  /**
   * @param {number} date
   * @param {Order} order
   */
  #getWeekendDiscount(date, order) {
    const discount = new WeekendEvent(date, order).getDiscount();
    this.#addBenefit(discount, EVENT_NAMES.weekendEvent);
  }
  #getSpecialDiscount(date) {
    const discount = new SpecialEvent(date).getDiscount();
    this.#addBenefit(discount, EVENT_NAMES.specialEvent);
  }
  #getGiftBenefit(amountBeforeDiscount) {
    const gift = new GiftEvent(amountBeforeDiscount).getGift();
    this.#addBenefit(gift, EVENT_NAMES.giftEvent);
  }
  /**
   *
   * @returns {Benefits|undefined}
   */
  getBenefits() {
    return this.#benefits;
  }
}

export default EventController;
