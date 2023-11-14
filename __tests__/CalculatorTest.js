import { Calculator } from '../src/controllers';
import { getOrderList } from '../testUtils';

describe('계산 테스트', () => {
  test('할인 전 총 주문 금액', () => {
    const MENUS = [
      '티본스테이크-1',
      '바비큐립-1',
      '초코케이크-2',
      '제로콜라-1',
    ];
    const ORDER_LIST = getOrderList(MENUS);
    console.log('list', ORDER_LIST);
    const EXPECTED_AMOUNT = 142000;

    const result = new Calculator().calculateAmountBeforeDiscount(ORDER_LIST);

    expect(result).toBe(EXPECTED_AMOUNT);
  });
});
