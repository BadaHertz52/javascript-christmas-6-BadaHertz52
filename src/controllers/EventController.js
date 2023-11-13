import { NONE_EVENT_BENEFIT, THRESHOLD } from '../constants/index.js';
import { WeekDayEvent, WeekendEvent, XmasDDayEvent } from '../models/index.js';

class EventController {
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
    this.#setXmasDDayDiscount(date);
    this.#setWeekDayDiscount(date, order);
    this.#setWeekendDiscount(date, order);
  }
  #isEventTarget(amountBeforeDiscount) {
    if (amountBeforeDiscount < THRESHOLD.minPurchaseForEvent) return;
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
  getBenefit() {
    return this.#benefit;
  }
}

export default EventController;
