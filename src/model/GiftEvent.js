import { EVENT } from '../constants/index.js';

class GiftEvent {
  #isEventTarget = false;
  #discount = 0;
  /**
   * @param {number} beforeDiscountAmount
   */
  constructor(beforeDiscountAmount) {
    this.#checkEventTarget(beforeDiscountAmount);
    if (this.#isEventTarget) this.#setDiscount();
  }
  #checkEventTarget(beforeDiscountAmount) {
    this.#isEventTarget = beforeDiscountAmount >= EVENT.gift.minAmount;
  }
  #setDiscount() {
    this.#discount = EVENT.gift.discount;
  }
  getDiscount() {
    return this.#discount;
  }
}
export default GiftEvent;
