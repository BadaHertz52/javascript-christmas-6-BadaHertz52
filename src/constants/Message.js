import { freezeObject } from '../utils/index.js';
import { MIN_ORDER, RESERVATION_PERIOD, SEPARATOR } from './Rule.js';

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

export const ERROR_MESSAGE = freezeObject({
  basic: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  reservation: `${RESERVATION_PERIOD.start}~${RESERVATION_PERIOD.end}까지의 숫자중 하나를 사용하세요.`,
  none: '메뉴판에 있는 메뉴만 주문 가능합니다.',
  orderFormat: `메뉴 주문 형식에 맞추어 주문해주세요.(공백을 포함하지 않고 메뉴와 개수는 "${SEPARATOR.hyphen}로 주문한 메뉴는 ${SEPARATOR.comma}를 사용해 구분해주세요.")`,
  minOrder: `메뉴의 개수는 ${MIN_ORDER}이상의 숫자만 입력되도록 해주세요.`,
  maxOrder: '주문 가능한 메뉴의 총 개수는 20개입니다.',
  duplicate: '중복된 메뉴가 있습니다.',
});
