import {
  EVENT_THRESHOLD,
  GIFT,
  NONE_EVENT_BENEFIT,
} from '../../constants/index.js';

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
    return this.#isEventApplied ? GIFT : NONE_EVENT_BENEFIT;
  }
}

export default GiftEvent;
