import { MissionUtils } from '@woowacourse/mission-utils';
import { DDayEvent, GiftEvent, SpecialEvent, WeekdayEvent } from '../src/model';

describe('할인 전 총 주문 금액이 10000원 이상일 경우, 이벤트 적용 테스트', () => {
  describe('크리스마스 디데이 할인', () => {
    test('1~25일 안의 방문일 경우 할인 적용됨', () => {
      const DATE = 3;
      const DISCOUNT = 1200;
      expect(new DDayEvent(DATE).getDiscount()).toBe(DISCOUNT);
    });
    test('1~25일 외의 방문일 경우 할인 적용 안됨', () => {
      const date = MissionUtils.Random.pickNumberInRange(26, 31);
      expect(new DDayEvent(date).getDiscount()).toBe(0);
    });
  });
  describe('평일 할인', () => {
    test('기간 외의 주문일 경우 적용 안됨', () => {
      const DATE = 15;
      const ORDER = [{ food: '초코케이크', number: 1 }];
      expect(new WeekdayEvent(DATE, ORDER).getDiscount()).toEqual(0);
    });
    test('디저트 메뉴가 없는 주문일 경우 적용 안됨', () => {
      const DATE = 14;
      const ORDER = [{ food: '크리스마스파스타', number: 1 }];
      expect(new WeekdayEvent(DATE, ORDER).getDiscount()).toEqual(0);
    });
    test('이벤트 적용 기간 내에 디저트 메뉴를 주문 할 경우 할인 적용됨', () => {
      const DATE = 14;
      const ORDER = [
        { food: '초코케이크', number: 1 },
        { food: '아이스크림', number: 2 },
        { food: '크리스마스파스타', number: 1 },
      ];
      const DISCOUNT = 2023 * 3;
      expect(new WeekdayEvent(DATE, ORDER).getDiscount()).toEqual(DISCOUNT);
    });
  });
  describe('주말 할인', () => {
    test('기간 외의 주문일 경우 적용 안됨', () => {
      const DATE = 14;
      const ORDER = [{ food: '티본스테이크', number: 1 }];
      expect(new WeekdayEvent(DATE, ORDER).getDiscount()).toEqual(0);
    });
    test('메인 메뉴가 없는 주문일 경우 적용 안됨', () => {
      const DATE = 15;
      const ORDER = [{ food: '크리스마스파스타', number: 1 }];
      expect(new WeekdayEvent(DATE, ORDER).getDiscount()).toEqual(0);
    });
    test('이벤트 적용 기간 내에 메인 메뉴를 주문 할 경우 할인 적용됨', () => {
      const DATE = 14;
      const ORDER = [
        { food: '티본스테이크', number: 1 },
        { food: '아이스크림', number: 2 },
        { food: '크리스마스파스타', number: 1 },
      ];
      const DISCOUNT = 2023 * 2;
      expect(new WeekdayEvent(DATE, ORDER).getDiscount()).toEqual(DISCOUNT);
    });
  });
  describe('특별 할인', () => {
    test('기간 외의 주문일 경우 적용 안됨', () => {
      const DATES = [1, 4, 18];
      DATES.forEach((date) => {
        expect(new SpecialEvent(date).getDiscount()).toEqual(0);
      });
    });
    test('이벤트 적용 기간 내에 주문일 경우  천원 할인됨', () => {
      const DATES = [3, 10, 24, 25];
      DATES.forEach((date) => {
        expect(new SpecialEvent(date).getDiscount()).toEqual(1000);
      });
    });
  });
  describe('증정 이벤트', () => {
    test('할인 전 총 주문 금액이 12만원 미만 일 경우, 이벤트 적용 안됨 ', () => {
      expect(new GiftEvent(119000).getDiscount()).toEqual(0);
    });
    test('할인 전 총 주문 금액이 12만원 이상 일 경우 이벤트 적용되고 할인가는 2만5천원', () => {
      expect(new GiftEvent(120000).getDiscount()).toEqual(25000);
    });
  });
});
