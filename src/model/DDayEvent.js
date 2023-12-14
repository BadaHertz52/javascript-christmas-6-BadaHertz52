import { EVENT } from '../constants';

class DDayEvent {
  #isTarget = false;
  #discount = 0;

  constructor(date) {
    this.#checkEventTarget(date);
    if (this.#isTarget) this.#calculateDiscount(date);
  }
  #checkEventTarget(date) {
    const { start, end } = EVENT.dDay.period;
    this.#isTarget = date >= start && date <= end;
  }
  #calculateDiscount(date) {
    const { base, plus } = EVENT.dDay.discount;
    this.#discount = base + plus * (date - 1);
  }
  getDiscount() {
    return this.#discount;
  }
}

export default DDayEvent;
