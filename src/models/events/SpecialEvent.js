import { SPECIAL_EVENT } from '../../constants/index.js';

class SpecialEvent {
  #isEventApplied = false;
  constructor(date) {
    this.#isEventTargetDay(date);
  }
  #isEventTargetDay(date) {
    if (SPECIAL_EVENT.dates.includes(date)) this.#isEventApplied = true;
  }
  getDiscount() {
    return this.#isEventApplied ? SPECIAL_EVENT.discount : undefined;
  }
}

export default SpecialEvent;
