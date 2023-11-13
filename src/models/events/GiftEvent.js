import {
  EVENT_THRESHOLD,
  GIFT,
  GIFT_EVENT,
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
    return this.#isEventApplied ? GIFT_EVENT.discount : NONE_EVENT_BENEFIT;
  }
}

export default GiftEvent;
