import { X_MAS_D_DAY_EVENT } from '../../constants/index.js';

class XmasDDayEvent {
  /**@type {number} */
  #date;
  #isEventApplied = false;
  constructor(date) {
    this.#date = date;
    this.#isEventTarget();
  }
  #isEventTarget() {
    const { start, end } = X_MAS_D_DAY_EVENT.period;
    this.#isEventApplied = this.#date >= start && this.#date <= end;
  }
  getDiscount() {
    if (!this.#isEventApplied) return;
    const { initialDiscount, extraDiscount } = X_MAS_D_DAY_EVENT;

    return initialDiscount + extraDiscount * (this.#date - 1);
  }
}

export default XmasDDayEvent;
