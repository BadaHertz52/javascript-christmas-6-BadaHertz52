import { FOOD_TYPE, MENUS_BY_TYPE, NONE } from '../constants/index.js';
import { Money } from '../controllers/index.js';
import { isGift } from '../utils/index.js';
import { OutputView } from '../views/index.js';

const OutputController = {
  /**
   *
   * @param {Benefits} benefits
   */
  controlPrintGift(benefits) {
    OutputView.printGift(isGift(benefits));
  },
  controlPrintMenuByType() {
    const { appetizer, main, dessert, beverage } = MENUS_BY_TYPE;
    const BLANK = ' ';
    OutputView.printMenuByType('🥗' + BLANK + FOOD_TYPE.appetizer, appetizer);
    OutputView.printMenuByType('🍴' + BLANK + FOOD_TYPE.main, main);
    OutputView.printMenuByType('🧁' + BLANK + FOOD_TYPE.dessert, dessert);
    OutputView.printMenuByType('🥤' + BLANK + FOOD_TYPE.beverage, beverage);
  },
  /**
   *
   * @param {Benefits} benefits
   */
  getBenefitMessage(benefits) {
    const discountMoney = new Money(benefits.discount, true).getValue();
    return `${benefits.event}: ${discountMoney}`;
  },
  /**
   *
   * @param {Benefits} benefits
   */
  controlPrintBenefits(benefits) {
    const messages = benefits
      ? benefits.map((v) => this.getBenefitMessage(v))
      : [NONE];
    OutputView.printBenefits(messages);
  },
  /**
   *@param {'amountBeforeDiscount'|'totalBenefitAmount'|'amountAfterDiscount'} type
   * @param {number} money
   * @param {boolean} isDiscount
   */
  controlPrintAmount(type, money, isDiscount = false) {
    const amount = new Money(money, isDiscount && money).getValue();
    OutputView.printAmount(type, amount);
  },
  controlPrintBadge(badge) {
    const message = !badge ? NONE : badge.name;
    OutputView.printBadge(message);
    const extraMessage = badge
      ? `❄️  ❄️  ${badge.icon} 배지 🎁  ❄️  ❄️`
      : '❄️  ❄️  ❄️  ☃️  ❄️  ❄️  ❄️';
    OutputView.print(extraMessage);
  },
};
export default OutputController;
