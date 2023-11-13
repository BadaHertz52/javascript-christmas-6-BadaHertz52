import { freezeObject } from '../utils/Freeze.js';
import { FOOD_TYPE, MENUS } from './Menu.js';
const BADGE_SHAPE = freezeObject({
  santa: freezeObject({ name: '산타', icon: '🎅' }),
  tree: freezeObject({ name: '트리', icon: '🎄' }),
  star: freezeObject({ name: '별', icon: '🌟' }),
});

const EVENT_NAMES = freezeObject({
  xmasDDayEvent: '크리스마스 디데이 할인',
  weekDayEvent: '평일 할인',
  weekendEvent: '주말 할인',
  specialEvent: '특별 할인',
  giftEvent: '증정 이벤트',
});
const EVENT_THRESHOLD = freezeObject({
  minPurchaseForGift: 120000,
  minPurchaseForEvent: 10000,
  badge: freezeObject({
    santa: 20000,
    tree: 10000,
    star: 5000,
  }),
});
const DAYS = freezeObject(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']);
const NONE = freezeObject('없음');
const GIFT = freezeObject('샴페인 1개');
const EVENT_YEAR_AND_MONTH = freezeObject({
  year: 2023,
  month: 12,
});
const EVENT_COMMON_PERIOD = freezeObject({
  ...EVENT_YEAR_AND_MONTH,
  start: 1,
  end: 31,
});
const X_MAS_D_DAY_EVENT = freezeObject({
  period: freezeObject({
    ...EVENT_YEAR_AND_MONTH,
    start: 1,
    end: 25,
  }),
  initialDiscount: 1000,
  extraDiscount: 100,
});
const WEEK_DAY_EVENT = {
  period: freezeObject({
    ...EVENT_COMMON_PERIOD,
    days: ['sun', 'mon', 'tue', 'wed', 'thu'],
  }),
  discount: 2023,
  target: FOOD_TYPE.dessert,
};
const WEEKEND_EVENT = {
  period: freezeObject({
    ...EVENT_COMMON_PERIOD,
    days: ['fri', 'sat'],
  }),
  discount: 2023,
  target: FOOD_TYPE.main,
};
const GIFT_EVENT = {
  period: freezeObject({
    ...EVENT_COMMON_PERIOD,
  }),
  discount: MENUS.get('샴페인').price,
};
const SPECIAL_EVENT = {
  period: freezeObject({
    ...EVENT_COMMON_PERIOD,
  }),
  dates: [3, 19, 17, 24, 25, 31],
  discount: 1000,
};

export {
  BADGE_SHAPE,
  DAYS,
  GIFT,
  GIFT_EVENT,
  EVENT_NAMES,
  EVENT_THRESHOLD,
  EVENT_YEAR_AND_MONTH,
  NONE,
  WEEK_DAY_EVENT,
  WEEKEND_EVENT,
  SPECIAL_EVENT,
  X_MAS_D_DAY_EVENT,
};
