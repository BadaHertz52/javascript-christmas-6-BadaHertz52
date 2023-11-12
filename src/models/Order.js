import {
  FOOD_ORDER_REGEX_PATTERN,
  MENU_DELIMITER,
} from '../constants/index.js';
import { testRegExp, getMenuErrorMessage } from '../utils/index.js';
import { CustomError } from './index.js';

class Order {
  #orderList;
  constructor(string) {
    this.#setList(string);
    this.#validateOrderFormat();
  }
  #setList(string) {
    this.#orderList = string.split(MENU_DELIMITER);
  }
  //주문 형식 : food-개수 , MENU_DELIMITER 을 통한 메뉴 구분
  #isSuitableOrderFormat() {
    return this.#orderList.every((v) =>
      testRegExp(FOOD_ORDER_REGEX_PATTERN, v),
    );
  }
  #validateOrderFormat() {
    const errorMessage = getMenuErrorMessage('wrongOrderFormat');
    if (!this.#isSuitableOrderFormat)
      new CustomError('order error', errorMessage);
  }
  //메뉴 개수 : 최소 1, 최대 20
  //메뉴 판에 있는 메뉴
  // 중복 메뉴 X
  // 음로만 X
}

export default Order;
