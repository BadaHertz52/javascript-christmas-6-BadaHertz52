import { freezeObject } from '../utils/index.js';

const MENU_DELIMITER = freezeObject(',');

const FOOD_DELIMITER = freezeObject('-');

const MENU_UNIT = freezeObject('개');

const CURRENCY_UNIT = freezeObject('원');

const DISCOUNT_SIGN = freezeObject('-');

const THRESHOLD = freezeObject({
  reservationDate: freezeObject({
    min: 1,
    max: 31,
  }),
  badge: freezeObject({
    star: 5000,
    tree: 10000,
    santa: 20000,
  }),
  numberOfMenu: freezeObject({
    min: 1,
    max: 20,
  }),
  minPurchaseForGift: freezeObject(120000),
  minPurchaseFoEvent: freezeObject(10000),
});

export {
  DISCOUNT_SIGN,
  FOOD_DELIMITER,
  MENU_DELIMITER,
  MENU_UNIT,
  CURRENCY_UNIT,
  THRESHOLD,
};
