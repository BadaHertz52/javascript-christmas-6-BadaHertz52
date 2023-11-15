import { FOOD_DELIMITER, MENUS } from '../constants/index.js';

class OrderedMenu {
  #food;
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
  getData() {
    return {
      ...MENUS.get(this.#food),
      numberOfOrder: this.#numberOfOrder,
    };
  }
}

export default OrderedMenu;
