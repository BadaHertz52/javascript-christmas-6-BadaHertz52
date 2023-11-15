import { DAYS, EVENT_NAMES, EVENT_YEAR_AND_MONTH } from '../constants/index.js';
/**
 *
 * @param {number} date
 * @returns 'sun'| 'mon'| 'tue'| 'wed'| 'thu'| 'fri'| 'sat'
 */
const getDay = (date) => {
  const { year, month } = EVENT_YEAR_AND_MONTH;
  const day = new Date(year, month - 1, date).getDay();
  return DAYS[day].toString();
};

const isInEventDays = (date, eventDays) => {
  const day = getDay(date);
  return eventDays.includes(day);
};
/**
 *
 * @param  {{food:string, type:string, price:number, numberOfOrder:number}[]} order : ;
 * @param {'dessert'|'main'} eventTargetFoodType
 * @returns
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
 *
 * @param {Benefits} benefits
 * @returns boolean
 */
const isGift = (benefits) => {
  return benefits
    ? benefits.some((v) => v.event === EVENT_NAMES.giftEvent)
    : false;
};
export { isGift, isInEventDays, getNumberOfEventTargetMenu };
