import { MENU_DELIMITER } from '../src/constants';
import { Order, OrderedMenu } from '../src/models';
import { getOrderErrorMessage } from '../src/utils';

describe('주문 예외 테스트', () => {
  test('주문 형식이 "메뉴-개수" 형태가 아닐 경우 예외 발생', () => {
    const WRONG_ORDERS = ['초코', '초코1', '초코-'];
    const ERROR_MESSAGE = getOrderErrorMessage('wrongOrderFormat');
    WRONG_ORDERS.forEach((v) => {
      expect(() => new Order(v)).toThrow(ERROR_MESSAGE);
    });
  });

  test('","로 메뉴를 구분하지 않으면 예외 발생', () => {
    const WRONG_ORDERS = [
      '초코케이크-1 샴페인-1',
      '초코케이크-1  /샴페인-1',
      '초코케이크-1,, 샴페인-1',
    ];
    const ERROR_MESSAGE = getOrderErrorMessage('wrongOrderFormat');
    WRONG_ORDERS.forEach((v) => {
      expect(() => new Order(v)).toThrow(ERROR_MESSAGE);
    });
  });

  test('하나의 메뉴에 대한 주문 개수가 1개 이상 20개 이하가 아닐 예외 발생', () => {
    const WRONG_ORDERS = ['초코케이크-0', '초코케이크-21'];
    const ERROR_MESSAGE = getOrderErrorMessage('wrongNumberOfOrder');
    WRONG_ORDERS.forEach((v) => {
      expect(() => new Order(v)).toThrow(ERROR_MESSAGE);
    });
  });

  test('총 메뉴 개수가 20개를 초과할 경우 예외 발생', () => {
    const WRONG_ORDER = '초코케이크-1,샴페인-20';
    const ERROR_MESSAGE = getOrderErrorMessage('maxTotalNumberOfOrder');
    expect(() => new Order(WRONG_ORDER)).toThrow(ERROR_MESSAGE);
  });

  test('메뉴판에 없는 메뉴일 경우 예외 발생', () => {
    const WRONG_ORDERS = ['초코-1', '샐러드-1'];
    const ERROR_MESSAGE = getOrderErrorMessage('none');
    WRONG_ORDERS.forEach((v) => {
      expect(() => new Order(v)).toThrow(ERROR_MESSAGE);
    });
  });
  test('중복된 메뉴가 있는 경우 예외 발생', () => {
    const WRONG_ORDER = '초코케이크-1,샴페인-2,초코케이크-2';
    const ERROR_MESSAGE = getOrderErrorMessage('duplicate');
    expect(() => new Order(WRONG_ORDER)).toThrow(ERROR_MESSAGE);
  });
  test('음료만 주문한 경우 예외 발생', () => {
    const WRONG_ORDERS = ['샴페인-1', '레드와인-1', '제로콜라-20'];
    const ERROR_MESSAGE = getOrderErrorMessage('noOnlyBeverage');
    WRONG_ORDERS.forEach((v) => {
      expect(() => new Order(v)).toThrow(ERROR_MESSAGE);
    });
  });
});

describe('유효한 주문', () => {
  test('유효한 주문 시, 주문 리스트를 반환', () => {
    const ORDERS = [
      '양송이스푸-1',
      '크리스마스파스타-2',
      '초코케이크-3',
      '샴페인-1',
    ];
    const orderedMenus = ORDERS.map((v) => new OrderedMenu(v).getData());

    const order = new Order(ORDERS.join(MENU_DELIMITER));
    expect(order.getList()).toEqual(orderedMenus);
  });
});
