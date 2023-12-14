import { Calculator } from '../src/model';

describe('계산 테스트', () => {
  const BEFORE_DISCOUNT_AMOUNT = 142000;
  const TOTAL_BENEFITS = 31246;
  const AFTER_DISCOUNT_AMOUNT = 135754;
  const ORDER = [
    { food: '티본스테이크', number: 1 },
    { food: '바비큐립', number: 1 },
    { food: '초코케이크', number: 2 },
    { food: '제로콜라', number: 1 },
  ];

  const BENEFITS = {
    dDay: 1200,
    weekday: 4046,
    weekend: 0,
    special: 1000,
    gift: 25000,
  };

  test('할인 전 총 구매 금액', () => {
    expect(Calculator.getBeforeDiscountAmount(ORDER)).toEqual(
      BEFORE_DISCOUNT_AMOUNT,
    );
  });
  test('총 혜택 금액', () => {
    expect(Calculator.getTotalBenefits(BENEFITS)).toEqual(TOTAL_BENEFITS);
  });
  test('할인 후 예상 결제  금액', () => {
    expect(
      Calculator.getAfterDiscountAmount(
        BEFORE_DISCOUNT_AMOUNT,
        TOTAL_BENEFITS,
        BENEFITS,
      ),
    ).toEqual(AFTER_DISCOUNT_AMOUNT);
  });
});
