import { Calculator } from '../models/index.js';
import { isGift } from '../utils/EventUtils.js';

const CalculatorController = {
  /**
   *
   * @param {Order} order
   * @description type FoodName ="양송이스푸"|"타파스"|....|"샴페인"
   *  @returns {number}
   */
  getAmountBeforeDiscount(order) {
    const value = Calculator.calculateAmountBeforeDiscount(order);
    return value;
  },
  /**
   *
   * @param {Benefits} benefits
   * @returns {number}
   */
  getTotalBenefitAmount(benefits) {
    return Calculator.calculateTotalBenefitAmount(benefits);
  },
  /**
   *
   * @param {Benefits} benefits
   * @param  {{amountBeforeDiscount:number|undefined; amountAfterDiscount:number|undefined; totalBenefitAmount:number|undefined}} amount
   * @returns {number}
   */
  getAmountAfterDiscount(benefits, amount) {
    const { amountBeforeDiscount, totalBenefitAmount } = amount;

    return Calculator.calculateAmountAfterDiscount(
      amountBeforeDiscount,
      totalBenefitAmount,
      isGift(benefits),
    );
  },
  /**
   *
   * @param {Benefits} benefits
   * @param {{amountBeforeDiscount:number|undefined; amountAfterDiscount:number|undefined; totalBenefitAmount:number|undefined}} amount
   * @returns {{totalBenefitAmount: number, amountAfterDiscount: number}}
   */
  getAmountsAfterDiscount(benefits, amount) {
    const totalBenefitAmount = this.getTotalBenefitAmount(benefits);
    const amountAfterDiscount = this.getAmountAfterDiscount(benefits, {
      ...amount,
      totalBenefitAmount: totalBenefitAmount,
    });

    return {
      totalBenefitAmount: totalBenefitAmount,
      amountAfterDiscount: amountAfterDiscount,
    };
  },
};

export default CalculatorController;
