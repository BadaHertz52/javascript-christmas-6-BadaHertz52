import {
  FOOD_ARRAY,
  FOOD_ORDER_REGEX_PATTERN,
  FOOD_TYPE,
  MENU_DELIMITER,
  THRESHOLD,
} from '../constants/index.js';
import { testRegExp, getOrderErrorMessage } from '../utils/index.js';
import { CustomError, OrderedMenu } from './index.js';

class Order {
  /**
   * @type string[]|undefined
   */
  #formatArray;
  /**
   *@type undefined | { food:string, type:string, price:number, numberOfOrder:number}[]
   * 주문 목록
   */
  #list;
  /**
   * @type string[]
   * 주문한 음식명 배열
   */
  #orderedFoods;

  constructor(string) {
    this.#setFormatArray(string);
    this.#validateOrderFormat();
    this.#setList();
    this.#validateNumberOfOrder();
    this.#validateTotalNumberOfOrder();
    this.#setOrderedFoods();
    this.#isInMenu();
    this.#isDuplicate();
    this.#hasOnlyBeverage();
  }
  #setFormatArray(string) {
    this.#formatArray = string.split(MENU_DELIMITER);
  }
  #setList() {
    this.#list = this.#formatArray.map((v) => new OrderedMenu(v).getData());
  }
  #setOrderedFoods() {
    this.#orderedFoods = this.#list.map((v) => v.food);
  }
  #isSuitableOrderFormat() {
    return this.#formatArray.every((v) =>
      testRegExp(FOOD_ORDER_REGEX_PATTERN, v),
    );
  }
  #makeError(errorContent) {
    const errorMessage = getOrderErrorMessage();
    new CustomError('order error:' + errorContent, errorMessage);
  }
  #validateOrderFormat() {
    if (!this.#isSuitableOrderFormat()) this.#makeError('order format');
  #validateNumberOfOrder() {
    const pass = this.#list.every((v) => {
      const numberOfOrder = v.numberOfOrder;
      const { min, max } = THRESHOLD.numberOfOrder;
      return numberOfOrder >= min && numberOfOrder <= max;
    });
    if (!pass) this.#makeError('wrongNumberOfOrder');
  }
  getTotalNumberOfOrder() {
    return this.#list.reduce(
      (accumulator, currentValue) => accumulator + currentValue.numberOfOrder,
      0,
    );
  }
  #validateTotalNumberOfOrder() {
    if (this.getTotalNumberOfOrder() > THRESHOLD.maxTotalNumberOfOrder)
      this.#makeError('maxTotalNumberOfOrder');
  }
  #isInMenu() {
    const pass = this.#orderedFoods.every((v) => FOOD_ARRAY.includes(v));
    if (!pass) this.#makeError('none');
  }
  #isDuplicate() {
    if (new Set(this.#orderedFoods).size !== this.#orderedFoods.length)
      this.#makeError('duplicate');
  }
  #hasOnlyBeverage() {
    const isOnlyBeverage = this.#list.every(
      (v) => v.type === FOOD_TYPE.beverage,
    );
    if (isOnlyBeverage) this.#makeError('only beverage');
  }
  getList() {
    return this.#list;
  }
}

export default Order;
