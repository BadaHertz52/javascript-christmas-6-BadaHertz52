import { freezeObject } from '../utils/index.js';

const ERROR_MESSAGE = freezeObject({
  header: '[ERROR]',
  footer: '다시 입력해주세요.',
  reservationDate: '유효하지 않은 날짜입니다.',
  order: '유효하지 않은 주문입니다.',
});

const QUERY = freezeObject({
  reservationDate:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (1~31의 숫자만 입력해 주세요!)',
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
    `총주문 금액 ${new Money(
      EVENT_THRESHOLD.minPurchaseForEvent,
    ).getValue()} 이상부터 이벤트가 적용돼요.`,
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
