import { GIFT_EVENT } from '../constants/index.js';

class Calculator {
  /**
   * @param {Order} order
   */
  calculateAmountBeforeDiscount(order) {
    return order.reduce((accumulator, currentValue) => {
      const { price, numberOfOrder } = currentValue;
      return accumulator + price * numberOfOrder;
    }, 0);
  }
  /**
   *
   * @param {Benefits} benefits
   */
  calculateTotalBenefitAmount(benefits) {
    return !benefits
      ? 0
      : benefits.reduce(
          (accumulator, currentValue) => accumulator + currentValue.discount,
          0,
        );
  }
  /**
   * @param {number} amountBeforeDiscount
   * @param {number} totalBenefitAmount
   * @param {boolean} isGift
   */
  calculateAmountAfterDiscount(
    amountBeforeDiscount,
    totalBenefitAmount,
    isGift,
  ) {
    const giftDiscount = isGift ? GIFT_EVENT.discount : 0;
    return amountBeforeDiscount - (totalBenefitAmount - giftDiscount);
  }
}

export default Calculator;
