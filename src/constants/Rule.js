import { freezeObject } from '../utils/Freeze.js';

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
  numberOfOrder: freezeObject({
    min: 1,
    max: 20,
  }),
  maxTotalNumberOfOrder: 20,
});

export {
  DISCOUNT_SIGN,
  FOOD_DELIMITER,
  MENU_DELIMITER,
  MENU_UNIT,
  CURRENCY_UNIT,
  THRESHOLD,
};
