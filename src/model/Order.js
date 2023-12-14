import {
  BEVERAGE,
  FOODS,
  MAX_ORDER,
  REG_EXP,
  SEPARATOR,
} from '../constants/index.js';
import { getErrorMessage, throwError } from '../utils/index.js';

class Order {
  /**
   * @type {{food:string,number: number}[]|undefined}
   */
  #orders;

  constructor(string) {
    const orderArray = string.split(SEPARATOR.comma);
    this.#validate(string, orderArray);
    this.#setOrders(orderArray);
  }
  #handleError() {
    throwError('order', getErrorMessage('order'));
  }
  #checkComma(string, orderArray) {
    const lengthOfComma = [...string].filter(
      (v) => v === SEPARATOR.comma,
    ).length;
    const lengthOfOrder = orderArray.length;
    if (lengthOfComma !== lengthOfOrder - 1) this.#handleError();
  }
  #checkFormat(orderArray) {
    const pass = orderArray.every((order) => REG_EXP.order.test(order));
    if (!pass) this.#handleError();
  }
  #getMenus(orderArray) {
    return orderArray.map((order) => order.split(SEPARATOR.hyphen)[0]);
  }
  #checkNotOnlyBeverage(menus) {
    const pass = !!menus.filter((v) => !BEVERAGE.includes(v)).length;

    if (!pass) this.#handleError();
  }
  #checkDuplicate(menus) {
    if (new Set(menus).size !== menus.length) this.#handleError();
  }
  #checkNoneMenu(menus) {
    const pass = menus.every((menu) => FOODS.includes(menu));

    if (!pass) this.#handleError();
  }
  #checkTotalNumber(orderArray) {
    const numbers = orderArray.map((order) =>
      Number(order.split(SEPARATOR.hyphen)[1]),
    );
    const totalNumber = numbers.reduce(
      (accumulator, current) => accumulator + current,
      0,
    );
    if (totalNumber > MAX_ORDER) this.#handleError();
  }

  #validate(string, orderArray) {
    this.#checkComma(string, orderArray);
    this.#checkFormat(orderArray);

    const menus = this.#getMenus(orderArray);
    this.#checkNotOnlyBeverage(menus);
    this.#checkNoneMenu(menus);
    this.#checkDuplicate(menus);

    this.#checkTotalNumber(orderArray);
  }
  #setOrders(orderArray) {
    this.#orders = orderArray.map((v) => {
      const [food, number] = v.split(SEPARATOR.hyphen);
      return {
        food: food,
        number: Number(number),
      };
    });
  }

  getState() {
    return this.#orders;
  }
}

export default Order;
