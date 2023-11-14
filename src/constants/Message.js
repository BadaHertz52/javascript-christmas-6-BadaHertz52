import { freezeObject } from '../utils/index.js';
import { EVENT_THRESHOLD } from './EventRule.js';
import {
  CURRENCY_UNIT,
  FOOD_DELIMITER,
  MENU_DELIMITER,
  THRESHOLD,
} from './Rule.js';

const RESERVATION_DATE_MESSAGE = `(${THRESHOLD.reservationDate.min}~${THRESHOLD.reservationDate.max}의 숫자만 입력해 주세요!)`;

const NO_ONLY_BEVERAGE_MESSAGE = freezeObject(
  '음료만 주문 시, 주문할 수 없습니다.',
);

const NUMBER_OF_ORDER_MESSAGE = freezeObject(
  `하나의 메뉴에 대해 주문할 수 있는 개수는 최소 ${THRESHOLD.numberOfOrder.min}개, 최대 ${THRESHOLD.numberOfOrder.max}개입니다.`,
);

const MAX_TOTAL_NUMBER_OF_ORDER_MESSAGE = freezeObject(
  `주문 가능한 메뉴의 총 개수는 최대 ${THRESHOLD.maxTotalNumberOfOrder}개입니다.`,
);

const ERROR_MESSAGE = freezeObject({
  header: '[ERROR]',
  reInput: '다시 입력해 주세요.',
  reservationDate: freezeObject({
    basic: '유효하지 않은 날짜입니다.',
    detail: RESERVATION_DATE_MESSAGE,
  }),
  order: freezeObject({
    basic: '유효하지 않은 주문입니다.',
    duplicate: '중복된 메뉴가 있습니다.',
    wrongNumberOfOrder: NUMBER_OF_ORDER_MESSAGE,
    none: '메뉴판에 없는 메뉴가 있습니다.',
    noOnlyBeverage: NO_ONLY_BEVERAGE_MESSAGE,
    wrongOrderFormat: `잘못된 주문 형식입니다.`,
    maxTotalNumberOfOrder: MAX_TOTAL_NUMBER_OF_ORDER_MESSAGE,
  }),
});

const QUERY = freezeObject({
  reservationDate:
    '12월 중 식당 예상 방문 날짜는 언제인가요?' + RESERVATION_DATE_MESSAGE,
  order:
    '주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
});

const MESSAGE = freezeObject({
  greetings: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  notesOnEvent: freezeObject([
    `주문 시 "메뉴${FOOD_DELIMITER}개수"형태로 "${MENU_DELIMITER}"를 사용해 메뉴 구분해서 입력해주세요. (e.g. 해산물파스타-2,레드와인-1)`,
    NO_ONLY_BEVERAGE_MESSAGE,
    NUMBER_OF_ORDER_MESSAGE,
    MAX_TOTAL_NUMBER_OF_ORDER_MESSAGE,
    `총주문 금액 ${EVENT_THRESHOLD.minPurchaseForEvent.toLocaleString(
      'ko-KR',
    )}${CURRENCY_UNIT}이상부터 이벤트가 적용돼요.`,
  ]),
  event: freezeObject({
    preview: freezeObject({
      header: '12월',
      footer: '일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
    }),
  }),
});

const OUTPUT_HEADER_MESSAGE = freezeObject({
  notesOnEvent: '🎅 이벤트 주의 사항 안내 🎄',
  order: '<주문 메뉴>',
  amountBeforeDiscount: '<할인 전 총주문 금액>',
  gift: '<증정 메뉴>',
  benefits: '<혜택 내역>',
  totalBenefitAmount: '<총혜택 금액>',
  amountAfterDiscount: '<할인 후 예상 결제 금액>',
  badge: '<12월 이벤트 배지>',
});

export { ERROR_MESSAGE, MESSAGE, OUTPUT_HEADER_MESSAGE, QUERY };
