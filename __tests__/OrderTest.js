import { Order } from '../src/model/index.js';
import { getErrorMessage } from '../src/utils/index.js';

describe('주문 테스트', () => {
  describe('유효하지 않은 주문일 경우 예외 발생', () => {
    const ERROR_MESSAGE = getErrorMessage('order');
    test('메뉴판에 없는 메뉴 주문', () => {
      expect(() => new Order('랍스터-1')).toThrow(ERROR_MESSAGE);
    });
    test('중복 메뉴 주문', () => {
      expect(() => new Order('타파스-1,타파스-1')).toThrow(ERROR_MESSAGE);
    });
    test('음료만 주문', () => {
      expect(() => new Order('제로콜라-1')).toThrow(ERROR_MESSAGE);
    });
    test('올바르지 않는 주문 형식', () => {
      const ARRAY = [
        '타파스1',
        '타파스',
        '1타파스',
        '1-타파스',
        '타파스-0',
        '타파스-21',
        '타파스-1 바비큐립-1',
      ];
      ARRAY.forEach((v) => {
        expect(() => new Order(v)).toThrow(ERROR_MESSAGE);
      });
    });
    test('최대 주문 개수 이상 주문', () => {
      expect(() => new Order('타파스-3,재로콜라-20')).toThrow(ERROR_MESSAGE);
    });
  });

  describe('유효한 주문의 경우, 주문을 배열 형식으로 반환', () => {
    const ORDER = '타파스-1,바비큐립-1';
    expect(new Order(ORDER).getState()).toEqual([
      {
        food: '타파스',
        number: 1,
      },
      { food: '바비큐립', number: 1 },
    ]);
  });
});
