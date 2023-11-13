import { FOOD_DELIMITER, MENUS } from '../constants/index.js';

class OrderedMenu {
  #food;
  #numberOfOrder;
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
