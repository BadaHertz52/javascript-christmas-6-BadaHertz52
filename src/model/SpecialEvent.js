import { EVENT } from '../constants';

class SpecialEvent {
  #isInPeriod = false;
  #discount = 0;
  /**
   * @param {number} date
   */
  constructor(date) {
    this.#checkPeriod(date);
    if (this.#isInPeriod) this.#setDiscount();
  }
  #checkPeriod(date) {
    const { dateArray } = EVENT.special;
    this.#isInPeriod = dateArray.includes(date);
  }
  #setDiscount() {
    this.#discount = EVENT.special.discount;
  }
  getDiscount() {
    return this.#discount;
  }
}
export default SpecialEvent;
