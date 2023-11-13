import { EVENT_NAMES } from '../constants/index.js';
import { Money } from '../models/index.js';
import { OutputView } from '../views/index.js';

const OutputController = {
  controlPrintGift(benefits) {
    const isGift = benefits.some((v) => v.event === EVENT_NAMES.giftEvent);
    if (isGift) OutputView.printGift();
  },
  getBenefitMessage(benefit) {
    const discountMoney = new Money(benefit.discount, true).getValue();
    return `${benefit.event}: ${discountMoney}`;
  },
  controlPrintBenefits(benefits) {
    const messages = benefits.map((v) => this.getBenefitMessage(v));
    OutputView.printBenefits(messages);
  },
  /**
   *@param {'amountBeforeDiscount'|'totalBenefitAmount'|'amountAfterDiscount'} type
   * @param {number} money
   * @param {boolean} isDiscount
   */
  controlPrintAmount(type, money, isDiscount = false) {
    const amount = new Money(money, isDiscount).getValue();
    OutputView.printAmount(type, amount);
  },
};
export default OutputController;
