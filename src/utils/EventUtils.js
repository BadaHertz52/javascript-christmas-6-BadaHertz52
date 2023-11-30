import { DAYS, EVENT_NAMES, EVENT_YEAR_AND_MONTH } from '../constants/index.js';
/**
 * @param {number} date
 * @returns {'sun'| 'mon'| 'tue'| 'wed'| 'thu'| 'fri'| 'sat'}
 */
const getDay = (date) => {
  const { year, month } = EVENT_YEAR_AND_MONTH;
  const day = new Date(year, month - 1, date).getDay();
  return DAYS[day].toString();
};

/**
 * @param {number} date
 * @param {number[]} eventDays
 * @returns {boolean}
 * @description 이벤트 기간에 해당 날짜가 포함되는 지 여부
 */
const isInEventDays = (date, eventDays) => {
  const day = getDay(date);
  return eventDays.includes(day);
};
/**
 * @param {Order} order : ;
 * @param {'dessert'|'main'} eventTargetFoodType
 * @returns {number} eventTargetFoodType에 해당하는 메뉴 개수의 합
 */
const getNumberOfEventTargetMenu = (order, eventTargetFoodType) => {
  return order
    .filter((v) => v.type === eventTargetFoodType)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue.numberOfOrder,
      0,
    );
};
/**
 * @param {Benefits} benefits
 * @returns {boolean}
 * @description 이벤트 혜택에 증정품이 포함되어 있는지 여부를 반환
 */
const isGift = (benefits) => {
  return benefits
    ? benefits.some((v) => v.event === EVENT_NAMES.giftEvent)
    : false;
};

export { isGift, isInEventDays, getNumberOfEventTargetMenu };
