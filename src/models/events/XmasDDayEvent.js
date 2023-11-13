import { X_MAS_D_DAY_EVENT } from '../../constants/index.js';

class XmasDDayEvent {
  #date;
  #isEventApplied = false;
  constructor(date) {
    this.#date = date;
    this.#isEventTarget(date);
  }
  #isEventTarget() {
    const { start, end } = X_MAS_D_DAY_EVENT.period;
    this.#isEventApplied = this.#date >= start && this.#date <= end;
  }
  /**
   *
   * @param {number} date
   * @returns {undefined|number}
   */
  getDiscount() {
    if (!this.#isEventApplied) return;
    const { initialDiscount, extraDiscount } = X_MAS_D_DAY_EVENT;
    return initialDiscount + extraDiscount * (this.#date - 1);
  }
}

export default XmasDDayEvent;
