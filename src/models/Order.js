import {
  FOOD_ARRAY,
  FOOD_DELIMITER,
  FOOD_ORDER_REGEX_PATTERN,
  MENU_DELIMITER,
  THRESHOLD,
} from '../constants/index.js';
import { testRegExp, getMenuErrorMessage } from '../utils/index.js';
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
  //주문 형식 : food-개수 , MENU_DELIMITER 을 통한 메뉴 구분
  #isSuitableOrderFormat() {
    return this.#formatArray.every((v) =>
      testRegExp(FOOD_ORDER_REGEX_PATTERN, v),
    );
  }
  #validateOrderFormat() {
    const errorMessage = getMenuErrorMessage('wrongOrderFormat');
    if (!this.#isSuitableOrderFormat())
      new CustomError('order error', errorMessage);
  }
  getNumberOfMenu() {
    return this.#list.reduce(
      (accumulator, currentValue) => accumulator + currentValue.numberOfOrder,
      0,
    );
  }
  //메뉴 개수 :  최대 20
  #validateNumberOfMenu() {
    if (this.getNumberOfMenu() > THRESHOLD.numberOfMenu.max)
      new CustomError('order error', getMenuErrorMessage('maxNumber'));
  }

  //메뉴 판에 있는 메뉴
  #isInMenu() {
    const pass = this.#orderedFoods.every((v) => FOOD_ARRAY.includes(v));
    if (!pass) new CustomError('order error', getMenuErrorMessage('none'));
  }
  // 중복 메뉴 X
  // 음로만 X
}

export default Order;
