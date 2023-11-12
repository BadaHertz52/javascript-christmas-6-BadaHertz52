import { freezeObject, getOutputHeader } from '../utils/index.js';
import { FOOD_DELIMITER, MENU_DELIMITER, THRESHOLD } from './Rule.js';

const ERROR_MESSAGE = freezeObject({
  header: '[ERROR]',
  footer: '다시 입력해주세요.',
  reservation: freezeObject({
    basic: '유효하지 않은 날짜입니다.',
    range: '1이상 31이하의 숫자만 가능합니다.',
    type: '숫자가 아닌 다른 형식은 입력할 수 없습니다.',
  }),
  menu: freezeObject({
    basic: '유효하지 않은 주문입니다.',
    minNumber: `메뉴의 개수는 ${THRESHOLD.numberOfMenu.min}개 이상이여야 합니다.`,
    maxNumber: `메뉴는 한번에 최대 ${THRESHOLD.numberOfMenu.max}개까지만 주문 가능합니다.`,
    noMenuDelimiter: `메뉴 사이는 "${MENU_DELIMITER}"를 사용해 메뉴를 구분해주세요.`,
    wrongType: `메뉴 형식을 "메뉴${FOOD_DELIMITER}개수"(ex:해산물파스타-2)로 입력해주세요.`,
    noOnlyBeverage: '음료만 주문할 수 없습니다.',
  }),
});

const QUERY = freezeObject({
  reservation:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (1~31의 숫자만 입력해 주세요!)',
  menu: '주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
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
  order: getOutputHeader('주문 메뉴'),
  amountBeforeDiscount: getOutputHeader('할인 전 총주문 금액'),
  benefitDetails: getOutputHeader('혜택 내역'),
  totalBenefitAmount: getOutputHeader('총혜택 금액'),
  amountAfterDiscount: getOutputHeader('할인 후 예상 결제 금액'),
  badge: getOutputHeader('12월 이벤트 배지'),
});

export { ERROR_MESSAGE, MESSAGE, OUTPUT_HEADER_MESSAGE, QUERY };
