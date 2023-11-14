import { MissionUtils } from '@woowacourse/mission-utils';
import { EventController, OutputController } from '../src/controllers';
import {
  SpecialEvent,
  WeekDayEvent,
  WeekendEvent,
  XmasDDayEvent,
} from '../src/models';
import {
  expectLogContains,
  getLogSpy,
  getOrderList,
  getOutput,
  getRandomDate,
  getRandomDateNotSpecialEvent,
  getRandomSpecialDate,
  getRandomWeekDay,
  getRandomWeekend,
  LINE_SEPARATOR,
} from '../testUtils';
import { EVENT_NAMES } from '../src/constants';

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
      const ORDER_LIST = getOrderList(MENUS);
      const eventController = new EventController(
        DATE,
        ORDER_LIST,
        AMOUNT_BEFORE_DISCOUNT,
      );
      const benefits = eventController.getBenefits();
      expect(!!benefits[0]).toBeTruthy();
    });
  });
  describe('크리스마스 디데이 이벤트', () => {
    test('방문일이 1~25일이 아니면 이벤트 적용 안됨', () => {
      const date = getRandomDate(26, 31);
      const xMasDDayEvent = new XmasDDayEvent(date);
      expect(xMasDDayEvent.getDiscount()).toBeUndefined();
    });
    test('이벤트 적용 날짜에 따른 할인 금액 계산', () => {
      const date = MissionUtils.Random.pickNumberInRange(1, 25);
      const discount = 1000 + 100 * (date - 1);
      const xMasDDayEvent = new XmasDDayEvent(date);
      expect(xMasDDayEvent.getDiscount()).toBe(discount);
    });
  });

  describe('평일 할인', () => {
    test('방문일이 일~목요일아 아닐 경우 이벤트 적용 안됨', () => {
      const date = getRandomWeekend();

      const weekDayEvent = new WeekDayEvent(date);
      expect(weekDayEvent.getDiscount()).toBeUndefined();
    });
    test('주문한 메뉴 중 디저트 메뉴가 없으면 이벤트가 적용되지 않음', () => {
      const MENUS = ['티본스테이크-1', '바비큐립-1', '제로콜라-1'];
      const ORDER_LIST = getOrderList(MENUS);
      const date = getRandomWeekDay();
      console.log('평일 할인', date);
      const weekDayEvent = new WeekDayEvent(date, ORDER_LIST);

      expect(weekDayEvent.getDiscount()).toBeUndefined();
    });

    test('주문한 디저트 메뉴 당 2023원씩 할인', () => {
      const MENUS_ARRAY = [
        ['티본스테이크-1', '바비큐립-1', '초코케이크-1'],
        ['티본스테이크-1', '아이스크림-1', '초코케이크-2'],
      ];
      const DISCOUNT_ARRAY = [2023, 2023 * 3];

      const date = getRandomWeekDay();
      const ORDER_LIST_ARRAY = MENUS_ARRAY.map((v) => getOrderList(v));

      ORDER_LIST_ARRAY.forEach((v, i) => {
        const weekDayEvent = new WeekDayEvent(date, v);
        expect(weekDayEvent.getDiscount()).toBe(DISCOUNT_ARRAY[i]);
      });
    });
  });

  describe('주말 할인', () => {
    test('방문일이 금~토요일아 아닐 경우 이벤트 적용 안됨', () => {
      const date = getRandomWeekDay();

      const weekendEvent = new WeekendEvent(date);
      expect(weekendEvent.getDiscount()).toBeUndefined();
    });
    test('주문한 메뉴 중 메인 메뉴가 없으면 이벤트가 적용되지 않음', () => {
      const MENUS = ['시저샐러드-1', '제로콜라-1'];
      const ORDER_LIST = getOrderList(MENUS);

      const date = getRandomWeekend();

      const weekendEvent = new WeekendEvent(date, ORDER_LIST);

      expect(weekendEvent.getDiscount()).toBeUndefined();
    });

    test('주문한 메인 메뉴 당 2023원씩 할인', () => {
      const MENUS_ARRAY = [
        ['티본스테이크-1', '아이스크림-1', '초코케이크-2'],
        ['티본스테이크-1', '바비큐립-1', '초코케이크-1'],
      ];
      const DISCOUNT_ARRAY = [2023, 2023 * 2];

      const date = getRandomWeekend();
      const ORDER_LIST_ARRAY = MENUS_ARRAY.map((v) => getOrderList(v));

      ORDER_LIST_ARRAY.forEach((v, i) => {
        const weekendEvent = new WeekendEvent(date, v);
        expect(weekendEvent.getDiscount()).toBe(DISCOUNT_ARRAY[i]);
      });
    });
  });

  describe('특별 할인', () => {
    test('방문일이 특별 할인날이 아니면 적용되지 않음', () => {
      const date = getRandomDateNotSpecialEvent();

      const specialEvent = new SpecialEvent(date);

      expect(specialEvent.getDiscount()).toBeUndefined();
    });
    test('특별할인 적용 시, 1000원 할인', () => {
      const date = getRandomSpecialDate();

      const specialEvent = new SpecialEvent(date);

      expect(specialEvent.getDiscount()).toBe(1000);
    });
  });
  describe('출력 대상 이벤트', () => {
    test('혜택이 없는 이벤트는 출력 대상에서 제외', () => {
      const DATE = 29;
      const AMOUNT_BEFORE_DISCOUNT = 65500;
      const NOT_TARGET_EVENTS = [
        EVENT_NAMES.xMasDDayEvent,
        EVENT_NAMES.weekDayEvent,
        EVENT_NAMES.specialEvent,
      ];
      const TARGET_EVENTS = [EVENT_NAMES.weekendEvent, EVENT_NAMES.giftEvent];
      const MENUS = ['티본스테이크-1', '타파스-1', '아이스크림-1'];
      const orderList = getOrderList(MENUS);

      const eventController = new EventController(
        DATE,
        AMOUNT_BEFORE_DISCOUNT,
        orderList,
      );
      const benefits = eventController.getBenefits();

      expect(
        benefits.every((v) => !NOT_TARGET_EVENTS.includes(v.event)),
      ).toBeTruthy();
      expect(
        benefits.every((v) => TARGET_EVENTS.includes(v.event)),
      ).toBeTruthy();
    });
  });
});
