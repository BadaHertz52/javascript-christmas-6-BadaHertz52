import {
  EVENT_NAMES,
  FOOD_TYPE,
  MENUS_BY_TYPE,
  NONE,
} from '../constants/index.js';
import { Money } from '../models/index.js';
import { OutputView } from '../views/index.js';

const OutputController = {
  controlPrintGift(benefits) {
    const isGift = benefits.some((v) => v.event === EVENT_NAMES.giftEvent);
    OutputView.printGift(isGift);
  },
  controlPrintMenuByType() {
    const { appetizer, main, dessert, beverage } = MENUS_BY_TYPE;
    const BLANK = ' ';
    OutputView.printMenuByType('🥗' + BLANK + FOOD_TYPE.appetizer, appetizer);
    OutputView.printMenuByType('🍴' + BLANK + FOOD_TYPE.main, main);
    OutputView.printMenuByType('🧁' + BLANK + FOOD_TYPE.dessert, dessert);
    OutputView.printMenuByType('🥤' + BLANK + FOOD_TYPE.beverage, beverage);
  },
  getBenefitMessage(benefit) {
    const discountMoney = new Money(benefit.discount, true).getValue();
    return `${benefit.event}: ${discountMoney}`;
  },
  controlPrintBenefits(benefits) {
    const messages = benefits[0]
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
