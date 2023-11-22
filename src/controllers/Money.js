import { CURRENCY_UNIT, DISCOUNT_SIGN } from '../constants/index.js';

class Money {
  /** @type {undefined|string} */
  #value;
  /**
   * @param {boolean} [isDiscount=false]
   * @param {number} number
   */
  constructor(number, isDiscount = false) {
    this.#changeKoreanCurrencyUnit(number);
    this.#changeDiscountMoney(isDiscount);
  }
  #changeKoreanCurrencyUnit(number) {
    this.#value = `${number.toLocaleString('ko-KR')}${CURRENCY_UNIT}`;
  }
  #changeDiscountMoney(isDiscount) {
    if (isDiscount) this.#value = DISCOUNT_SIGN + this.#value;
  }
  /**
   *
   * @returns {undefined|string}
   */
  getValue() {
    return this.#value;
  }
}

export default Money;
