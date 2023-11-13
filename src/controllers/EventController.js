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
  #benefits = [];
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
  #addBenefit(discount, event) {
    if (discount) this.#benefits.push({ event: event, discount: discount });
  }
  #getXmasDDayDiscount(date) {
    const discount = new XmasDDayEvent(date).getDiscount();
    this.#addBenefit(discount, EVENT_NAMES.xmasDDayEvent);
  }
  #getWeekDayDiscount(date, order) {
    const discount = new WeekDayEvent(date, order).getDiscount();
    this.#addBenefit(discount, EVENT_NAMES.weekDayEvent);
  }
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
   * @returns {{ event: string, benefit: number|string }[]}
   */
  getBenefits() {
    return this.#benefits;
  }
}

export default EventController;
