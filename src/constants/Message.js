import { MAX_ORDER, MIN_ORDER, RESERVATION_PERIOD, SEPARATOR } from './Rule.js';

export const NONE = '없음';
export const DISCOUNT_SIGN = '-';
export const UNIT = Object.freeze({
  currency: '원',
  goods: '개',
});
export const MESSAGE = Object.freeze({
  greeting: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  previewHeader: '에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
});
export const QUERY = Object.freeze({
  reservation:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  order:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
});
export const HEADER = Object.freeze({
  menu: '<주문 메뉴>',
  beforeDiscountAmount: '<할인 전 총주문 금액>',
  gift: '<증정 메뉴>',
  benefit: '<혜택 내역>',
  totalBenefits: '<총혜택 금액>',
  afterDiscountAmount: '<할인 후 예상 결제 금액>',
  badge: '<12월 이벤트 배지>',
});

export const ERROR_MESSAGE = Object.freeze({
  reservation: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  order: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
});
