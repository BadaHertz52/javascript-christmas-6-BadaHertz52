import App from '../src/App';
import { EVENT_NAMES } from '../src/constants';
import { Calculator } from '../src/controllers';
import {
  getLogSpy,
  getOrderList,
  getOutput,
  mockQuestions,
} from '../testUtils';
import { expectLogContains, makeExpected } from '../testUtils/mock';

const makeBenefit = (event, discount) => ({
  event: event,
  discount: discount,
});

describe('계산 테스트', () => {
  describe('계산 테스트1 -Calculator 클래스 테스트', () => {
    test('할인 전 총 주문 금액', () => {
      const MENUS = [
        '티본스테이크-1',
        '바비큐립-1',
        '초코케이크-2',
        '제로콜라-1',
      ];
      const ORDER_LIST = getOrderList(MENUS);
      const EXPECTED_AMOUNT = 142000;

      const result = Calculator.calculateAmountBeforeDiscount(ORDER_LIST);

      expect(result).toBe(EXPECTED_AMOUNT);
    });
    test('총 혜택 금액', () => {
      const BENEFITS = [
        makeBenefit(EVENT_NAMES.xmasDDayEvent, 1200),
        makeBenefit(EVENT_NAMES.weekDayEvent, 4046),
        makeBenefit(EVENT_NAMES.specialEvent, 1000),
        makeBenefit(EVENT_NAMES.giftEvent, 25000),
      ];
      const TOTAL_BENEFIT_AMOUNT = 31246;
      const result = Calculator.calculateTotalBenefitAmount(BENEFITS);

      expect(result).toBe(TOTAL_BENEFIT_AMOUNT);
    });

    test('할인 후 금액', () => {
      const AMOUNT_BEFORE_DISCOUNT = 142000;
      const TOTAL_BENEFIT_AMOUNT = 31246;
      const AMOUNT_AFTER_DISCOUNT = 135754;
      const IS_GIFT = true;
      const result = Calculator.calculateAmountAfterDiscount(
        AMOUNT_BEFORE_DISCOUNT,
        TOTAL_BENEFIT_AMOUNT,
        IS_GIFT,
      );

      expect(result).toBe(AMOUNT_AFTER_DISCOUNT);
    });
  });

  describe('계산 테스트2- App.run 실행 ', () => {
    let logSpy;
    let app;
    beforeEach(() => {
      logSpy = getLogSpy();
      app = new App();
    });
    test('적용된 이벤트가 없을 경우', async () => {
      const AMOUNT = '8,500원';
      mockQuestions(['26', '타파스-1,제로콜라-1']);

      await app.run();

      const EXPECTED_ARRAY = [
        makeExpected('<할인 전 총주문 금액>', AMOUNT),
        makeExpected('<총혜택 금액>', '0원'),
        makeExpected('<할인 후 예상 결제 금액>', AMOUNT),
      ];

      EXPECTED_ARRAY.forEach((v) => {
        expectLogContains(getOutput(logSpy), v);
      });
    });
    test('적용된 이벤트가 있을 경우', async () => {
      const AMOUNT_BEFORE_DISCOUNT = '142,000원';
      const TOTAL_BENEFIT_AMOUNT = '-31,246원';
      const AMOUNT_AFTER_DISCOUNT = '135,754원';

      mockQuestions(['3', '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1']);

      await app.run();

      const EXPECTED_ARRAY = [
        makeExpected('<할인 전 총주문 금액>', AMOUNT_BEFORE_DISCOUNT),
        makeExpected('<총혜택 금액>', TOTAL_BENEFIT_AMOUNT),
        makeExpected('<할인 후 예상 결제 금액>', AMOUNT_AFTER_DISCOUNT),
      ];

      EXPECTED_ARRAY.forEach((v) => {
        expectLogContains(getOutput(logSpy), v);
      });
    });
  });
});
