import { EVENT, MENU } from '../constants';
import { isInTargetPeriod } from '../utils';

class WeekendEvent {
  #isInPeriod = false;
  #discount = 0;
  /**
   *
   * @param {number} date
   * @param {{food:string,number: number}[]} order
   */
  constructor(date, order) {
    this.#checkPeriod(date);
    if (this.#isInPeriod) this.#setDiscount(order);
  }
  #checkPeriod(date) {
    const { start, end } = EVENT.weekend.dayIndex;
    this.#isInPeriod = isInTargetPeriod(date, start, end);
  }
  #setDiscount(order) {
    const { target, discount } = EVENT.weekend;
    const targetOrder = order.filter((v) => MENU.get(v.food).type === target);
    const numberOfTarget = targetOrder.reduce(
      (accumulator, current) => accumulator + current.number,
      0,
    );
    this.#discount = numberOfTarget * discount;
  }
  getDiscount() {
    return this.#discount;
  }
}
export default WeekendEvent;
