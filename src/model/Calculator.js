import { MENU } from '../constants/index.js';
const Calculator = {
  /**
   * @param {{food:string,number: number}[]} order
   */
  getBeforeDiscountAmount(order) {
    const amount = order.reduce((accumulator, current) => {
      const { food, number } = current;
      const { price } = MENU.get(food);
      return accumulator + number * price;
    }, 0);

    return amount;
  },
  /**
   * @param {{ dDay: number,weekday: number,weekend: number, special: number,gift: number}} benefits
   */
  getTotalBenefits(benefits) {
    return Object.values(benefits).reduce(
      (accumulator, current) => accumulator + current,
      0,
    );
  },
  /**
   * @param {number} beforeDiscountAmount
   * @param {number} totalBenefits
   * @param {{ dDay: number,weekday: number,weekend: number, special: number,gift: number}} benefits
   */
  getAfterDiscountAmount(beforeDiscountAmount, totalBenefits, benefits) {
    return beforeDiscountAmount - totalBenefits + benefits.gift;
  },
};

export default Calculator;
