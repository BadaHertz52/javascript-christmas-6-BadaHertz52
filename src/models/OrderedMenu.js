import { FOOD_DELIMITER, MENUS } from '../constants/index.js';

class OrderedMenu {
  /**
   * @type {string|undefined}
   * */
  #food;
  /** @type {number|undefined} */
  #numberOfOrder;

  /**
   * @example "티본스테이크-1"
   * @param {string} string
   * @description 사용자가 주문한 메뉴-개수
   */
  constructor(string) {
    this.#separateString(string);
  }

  #separateString(string) {
    const [food, number] = string.split(FOOD_DELIMITER);
    this.#food = food;
    this.#numberOfOrder = Number(number);
  }
  /**
   * @returns {OrderedMenu}
   * @description type OrderedMenu ={ food:FoodName, type:FoodType, price:number, numberOfOrder:number}
   * type FoodName ="양송이스푸"|"타파스"|....|"샴페인";
   * type FoodType ='appetizer'|'main'|'dessert'|'beverage' ;
   */
  getData() {
    return {
      ...MENUS.get(this.#food),
      numberOfOrder: this.#numberOfOrder,
    };
  }
}

export default OrderedMenu;
