import { freezeObject } from '../utils/Freeze.js';
import { FOOD_TYPE, MENUS } from './Menu.js';
const BADGES = {
  santa: '🎅-santa',
  star: '🌟-star',
  tree: '🎄-tree',
};
const EVENT_THRESHOLD = freezeObject({
  minPurchaseForGift: 120000,
  minPurchaseForEvent: 10000,
  badge: freezeObject({
    star: 5000,
    tree: 10000,
    santa: 20000,
  }),
});
const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const NONE_EVENT_BENEFIT = '없음';

const EVENT_YEAR_AND_MONTH = {
  year: 2023,
  month: 12,
};
const EVENT_COMMON_PERIOD = {
  ...EVENT_YEAR_AND_MONTH,
  start: 1,
  end: 31,
};
const X_MAS_D_DAY_EVENT = {
  period: {
    ...EVENT_YEAR_AND_MONTH,
    start: 1,
    end: 25,
  },
  initialDiscount: 1000,
  extraDiscount: 100,
};
const WEEK_DAY_EVENT = {
  period: {
    ...EVENT_COMMON_PERIOD,
    days: ['sun', 'mon', 'tue', 'wed', 'thu'],
  },
  discount: 2023,
  target: FOOD_TYPE.dessert,
};
const WEEKEND_EVENT = {
  period: {
    ...EVENT_COMMON_PERIOD,
    days: ['fri', 'sat'],
  },
  discount: 2023,
  target: FOOD_TYPE.main,
};
const GIFT_EVENT = {
  period: {
    ...EVENT_COMMON_PERIOD,
  },
  discount: MENUS.get('샴페인').price,
};
const SPECIAL_EVENT = {
  period: {
    ...EVENT_COMMON_PERIOD,
  },
  dates: [3, 19, 17, 24, 25, 31],
  discount: 1000,
};

export {
  BADGES,
  DAYS,
  GIFT_EVENT,
  EVENT_THRESHOLD,
  EVENT_YEAR_AND_MONTH,
  NONE_EVENT_BENEFIT,
  WEEK_DAY_EVENT,
  WEEKEND_EVENT,
  SPECIAL_EVENT,
  X_MAS_D_DAY_EVENT,
};
