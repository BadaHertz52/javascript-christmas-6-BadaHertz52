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
    this.#setOrderedFoods();
    this.#validateNumberOfMenu();
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
  }
  getNumberOfMenu() {
    return this.#list.reduce(
      (accumulator, currentValue) => accumulator + currentValue.numberOfOrder,
      0,
    );
  }
  #validateNumberOfMenu() {
    if (this.getNumberOfMenu() > THRESHOLD.numberOfMenu.max)
      this.#makeError('number of menu');
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
