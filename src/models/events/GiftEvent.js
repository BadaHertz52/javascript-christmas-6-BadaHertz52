import { EVENT_THRESHOLD, GIFT_EVENT } from '../../constants/index.js';

class GiftEvent {
  #isEventApplied = false;

  /**
   * @param {number} amountBeforeDiscount
   * */
  constructor(amountBeforeDiscount) {
    this.#isEventTarget(amountBeforeDiscount);
  }

  #isEventTarget(amountBeforeDiscount) {
    if (amountBeforeDiscount >= EVENT_THRESHOLD.minPurchaseForGift)
      this.#isEventApplied = true;
  }
  /**
   * @returns {undefined|number}
   */
  getGift() {
    return this.#isEventApplied ? GIFT_EVENT.discount : undefined;
  }
}

export default GiftEvent;
