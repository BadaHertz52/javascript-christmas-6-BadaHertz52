import App from '../src/App';
import { Badge } from '../src/models';
import { getLogSpy } from '../testUtils';
import {
  expectLogContains,
  getOutput,
  makeExpected,
  mockQuestions,
} from '../testUtils/mock';

describe('배지 테스트', () => {
  describe('Badge 클래스 테스트', () => {
    test('총 혜택 금액에 띠라 배지 수여(산타:2만원 이상, 트리:만원 이상, 별:5천원 이상)', () => {
      const makeTestItem = (amount, badge) => ({
        amount: amount,
        badge: badge,
      });
      const TEST_ITEMS = [
        makeTestItem(20000, '산타'),
        makeTestItem(10000, '트리'),
        makeTestItem(5000, '별'),
      ];

      TEST_ITEMS.forEach((v, i) => {
        const { amount, badge } = v;
        expect(new Badge(amount).getShape().name).toBe(badge);
      });
    });
    test('총 혜택 금액이 5천원 미만인 경우 배지 없음', () => {
      expect(new Badge(4500).getShape()).toBeUndefined();
    });
  });

  describe('App.run 실행 시 배지에 관한 테스트', () => {
    let app;
    let logSpy;
    beforeEach(() => {
      logSpy = getLogSpy();
      app = new App();
    });
    test('총 혜택 금액에 띠라 배지 수여(산타:2만원 이상, 트리:만원 이상, 별:5천원 이상) ', async () => {
      mockQuestions(['3', '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1']);

      await app.run();

      const expected = makeExpected('<12월 이벤트 배지>', '산타');
      expectLogContains(getOutput(logSpy), expected);
    });
    test('총 혜택 금액이 5천원 미만인 경우 배지 없음', async () => {
      mockQuestions(['26', '타파스-1,제로콜라-1']);

      await app.run();

      const expected = makeExpected('<12월 이벤트 배지>', '없음');
      expectLogContains(getOutput(logSpy), expected);
    });
  });
});
