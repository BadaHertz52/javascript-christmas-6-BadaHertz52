import { freezeObject } from '../utils/index.js';

export const NONE = '없음';
export const DISCOUNT_SIGN = '-';
export const UNIT = freezeObject({
  currency: '원',
  goods: '개',
});
export const MESSAGE = freezeObject({
  greeting: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  previewHeader: '에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
});
export const QUERY = freezeObject({
  reservation:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  order:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
});
export const HEADER = freezeObject({
  menu: '<주문 메뉴>',
  beforeDiscountAmount: '<할인 전 총주문 금액>',
  gift: '<증정 메뉴>',
  benefit: '<혜택 내역>',
  totalBenefit: '<총혜택 금액>',
  afterDiscountAmount: '<할인 후 예상 결제 금액>',
  badge: '<12월 이벤트 배지>',
});
