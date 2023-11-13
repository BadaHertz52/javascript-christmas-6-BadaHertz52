import { NONE_EVENT_BENEFIT, EVENT_THRESHOLD } from '../constants/index.js';
import {
  SpecialEvent,
  WeekDayEvent,
  WeekendEvent,
  XmasDDayEvent,
} from '../models/index.js';

class EventController {
  #isEventApplied = false;
  #benefit = {
    xmasDDayEvent: undefined, // undefined|number(할인금액)||"없음"
    weekDayEvent: undefined,
    weekendEvent: undefined,
    gitEvent: undefined,
    specialEvent: undefined,
    totalDiscount: undefined,
  };
  constructor(date, order, amountOfBeforeDiscount) {
    this.#isEventTarget(amountOfBeforeDiscount);
    if (this.#isEventApplied) {
      this.#setXmasDDayDiscount(date);
      this.#setWeekDayDiscount(date, order);
      this.#setWeekendDiscount(date, order);
      this.#setSpecialDiscount(date);
    }
  }
  #isEventTarget(amountBeforeDiscount) {
    if (amountBeforeDiscount >= EVENT_THRESHOLD.minPurchaseForEvent)
      this.#isEventApplied = true;
  }
  #changeDiscountValue(discount) {
    return !discount ? NONE_EVENT_BENEFIT : discount;
  }
  #setXmasDDayDiscount(date) {
    const discount = new XmasDDayEvent(date).getDiscount();
    this.#benefit.xmasDDayEvent = this.#changeDiscountValue(discount);
  }
  #setWeekDayDiscount(date, order) {
    const discount = new WeekDayEvent(date, order).getDiscount();
    this.#benefit.weekDayEvent = this.#changeDiscountValue(discount);
  }
  #setWeekendDiscount(date, order) {
    const discount = new WeekendEvent(date, order).getDiscount();
    this.#benefit.weekendEvent = this.#changeDiscountValue(discount);
  }
  #setSpecialDiscount(date) {
    const discount = new SpecialEvent(date).getDiscount();
    this.#benefit.specialEvent = this.#changeDiscountValue(discount);
  }
  getBenefit() {
    return this.#benefit;
  }
}

export default EventController;
