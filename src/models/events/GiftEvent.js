import { EVENT_THRESHOLD, GIFT_EVENT } from '../../constants/index.js';

class GiftEvent {
  #isEventApplied = false;
  constructor(amountBeforeDiscount) {
    this.#isEventTarget(amountBeforeDiscount);
  }
  #isEventTarget(amountBeforeDiscount) {
    if (amountBeforeDiscount >= EVENT_THRESHOLD.minPurchaseForGift)
      this.#isEventApplied = true;
  }
  getGift() {
    return this.#isEventApplied ? GIFT_EVENT.discount : undefined;
  }
}

export default GiftEvent;
