import { SPECIAL_EVENT } from '../../constants/index.js';

class SpecialEvent {
  #isEventApplied = false;
  /**
   *
   * @param {number} date
   */
  constructor(date) {
    this.#isEventTargetDay(date);
  }
  #isEventTargetDay(date) {
    if (SPECIAL_EVENT.dates.includes(date)) this.#isEventApplied = true;
  }
  /**
   *
   * @returns {number|undefined}
   */
  getDiscount() {
    return this.#isEventApplied ? SPECIAL_EVENT.discount : undefined;
  }
}

export default SpecialEvent;
