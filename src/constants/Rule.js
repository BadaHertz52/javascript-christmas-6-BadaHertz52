import { MENU } from './Menu';

export const EVENT_MIN_AMOUNT = 10000;
export const MIN_ORDER = 1;
export const MAX_ORDER = 20;
export const RESERVATION_PERIOD = Object.freeze({ start: 1, end: 31 });
export const EVENT = Object.freeze({
  dDay: {
    name: '크리스마스 디데이 할인',
    period: Object.freeze({ start: 1, end: 25 }),
    // 총주문 금액에서 할인
    //할인 금액 = 1000 + 100 * 날짜
    discount: { base: 1000, plus: 100 },
  },
  weekday: {
    name: '평일 할인',
    period: RESERVATION_PERIOD,
    dayIndex: Object.freeze({ start: 0, end: 4 }),
    //디저트 메뉴를 메뉴 1개당 2,023원 할인
    target: 'dessert',
    discount: 2023,
  },
  weekend: {
    name: '주말 할인',
    period: RESERVATION_PERIOD,
    dayIndex: Object.freeze({ start: 5, end: 6 }),
    //메인 메뉴를 메뉴 1개당 2,023원 할인
    target: 'main',
    discount: 2023,
  },
  special: {
    name: '특별 할인',
    period: RESERVATION_PERIOD,
    dateArray: [3, 10, 17, 24, 25, 31],
    // 총주문 금액에서 할인
    discount: 1000,
  },
  gift: {
    name: '증정 이벤트',
    period: RESERVATION_PERIOD,
    discount: MENU.get('샴페인').price,
    //할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 1개 증정
    minAmount: 120000,
    goods: '샴페인 1개',
  },
});
export const BADGE = Object.freeze({
  star: Object.freeze({
    amount: 5000,
    shape: '별',
  }),
  tree: Object.freeze({
    amount: 10000,
    shape: '트리',
  }),
  santa: Object.freeze({
    amount: 20000,
    shape: '산타',
  }),
});
export const SEPARATOR = Object.freeze({
  // 메뉴-개수
  hyphen: '-',
  comma: ',',
});
