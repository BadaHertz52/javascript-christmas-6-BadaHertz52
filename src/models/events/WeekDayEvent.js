import { WEEK_DAY_EVENT } from '../../constants/index.js';
import {
  getNumberOfEventTargetMenu,
  isInEventDays,
} from '../../utils/index.js';

class WeekDayEvent {
  #isEventApplied = false;
  /**@type {number|undefined} */
  #numberOfTargetMenu;

  /**
   * @param {number} date
   * @param {Order} order
   */
  constructor(date, order) {
    this.#isEventTargetDay(date);
    this.#setNumberOfEventTargetMenu(order);
  }

  #isEventTargetDay(date) {
    if (isInEventDays(date, WEEK_DAY_EVENT.period.days))
      this.#isEventApplied = true;
  }
  #setNumberOfEventTargetMenu(order) {
    if (!this.#isEventApplied) return;
    this.#numberOfTargetMenu = getNumberOfEventTargetMenu(
      order,
      WEEK_DAY_EVENT.target,
    );
  }
  /**
   * @returns {number|undefined}
   */
  getDiscount() {
    if (!this.#isEventApplied || !this.#numberOfTargetMenu) return;

    return this.#numberOfTargetMenu * WEEK_DAY_EVENT.discount;
  }
}

export default WeekDayEvent;
