import { freezeObject } from '../utils/index.js';
import { FOOD_DELIMITER, THRESHOLD } from './Rule.js';

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
  event: freezeObject({
    target: '💡총주문 금액 10,000원 이상부터 이벤트가 적용됩니다.',
    preview: freezeObject({
      header: '12월',
      footer: '일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
    }),
  }),
});

const OUTPUT_HEADER_MESSAGE = freezeObject({
  order: '<주문 메뉴>',
  amountBeforeDiscount: '<할인 전 총주문 금액>',
  benefitDetails: '<혜택 내역>',
  totalBenefitAmount: '<총혜택 금액>',
  amountAfterDiscount: '<할인 후 예상 결제 금액>',
  badge: '<12월 이벤트 배지>',
});

export { ERROR_MESSAGE, MESSAGE, OUTPUT_HEADER_MESSAGE, QUERY };
