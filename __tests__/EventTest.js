import { EventController, OutputController } from '../src/controllers';
import { OrderedMenu } from '../src/models';
import {
  expectLogContains,
  getLogSpy,
  getOutput,
  LINE_SEPARATOR,
} from '../testUtils';

describe('이벤트 테스트', () => {
  describe('할인 전 총 주문 금액 미달로 인한 이벤트 적용 테스트', () => {
    test('할인 전 총 주문 금액이 10000원 미만이면, 이벤트 적용 안됨', () => {
      const DATE = 1;
      const AMOUNT_BEFORE_DISCOUNT = 6000;
      const ORDER = '양송이스푸-1';
      const message = ['<혜택 내역>' + LINE_SEPARATOR + '없음'];
      const logSpy = getLogSpy();

      const eventController = new EventController(
        DATE,
        ORDER,
        AMOUNT_BEFORE_DISCOUNT,
      );

      const benefits = eventController.getBenefits();

      expect(benefits).toEqual([]);

      OutputController.controlPrintBenefits(benefits);

      expectLogContains(getOutput(logSpy), message);
    });
    test('할인 전 총 주문 금액이 10000원 이상이면, 이벤트 적용됨', () => {
      const DATE = 1;
      const AMOUNT_BEFORE_DISCOUNT = 142000;
      const MENUS = [
        '티본스테이크-1',
        '바비큐립-1',
        '초코케이크-2',
        '제로콜라-1',
      ];
      const ORDER_LIST =getOrderList(MENUS);
      const eventController = new EventController(
        DATE,
        ORDER_LIST,
        AMOUNT_BEFORE_DISCOUNT,
      );

      const benefits = eventController.getBenefits();
      expect(!!benefits[0]).toBeTruthy();
    });
  });
});
