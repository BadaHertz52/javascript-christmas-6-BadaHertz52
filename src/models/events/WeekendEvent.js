import { WEEKEND_EVENT } from '../../constants/index.js';
import {
  getNumberOfEventTargetMenu,
  isInEventDays,
} from '../../utils/index.js';

class WeekendEvent {
  #isEventApplied = false;
  #numberOfTargetMenu;

  constructor(date, order) {
    this.#isEventTargetDay(date);
    this.#setNumberOfEventTargetMenu(order);
  }
  #isEventTargetDay(date) {
    const pass = isInEventDays(date, WEEKEND_EVENT.period.day);
    if (pass) this.#isEventApplied = true;
  }
  #setNumberOfEventTargetMenu(order) {
    if (!this.#isEventApplied) return;
    this.#numberOfTargetMenu = getNumberOfEventTargetMenu(
      order,
      WEEKEND_EVENT.target,
    );
  }
  getDiscount() {
    if (!this.#isEventApplied) return;
    return this.#numberOfTargetMenu * WEEKEND_EVENT.discount;
  }
}

export default WeekendEvent;
