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
   * @type Benefits
   */
  #benefits = undefined;
  /**
   *
   * @param {number} date
   * @param {Order} order
   * @param {number} amountOfBeforeDiscount
   */
  constructor(date, order, amountOfBeforeDiscount) {
    this.#isEventTarget(amountOfBeforeDiscount);
    if (this.#isEventApplied) {
      this.#getXmasDDayDiscount(date);
      this.#getWeekDayDiscount(date, order);
      this.#getWeekendDiscount(date, order);
      this.#getSpecialDiscount(date);
      this.#getGiftBenefit(amountOfBeforeDiscount);
    }
  }
  //이벤트 적용 여부 판단
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
   * @returns {Benefits}
   */
  getBenefits() {
    return this.#benefits;
  }
}

export default EventController;
