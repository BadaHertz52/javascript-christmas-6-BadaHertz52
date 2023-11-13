import { freezeObject } from '../utils/Freeze.js';
import { FOOD_DELIMITER, THRESHOLD } from './Rule.js';

const DATE_REGEX_PATTERN = freezeObject('^[1-9]{1}$|^[1-2][0-9]$|^[3][0-1]$');

const MAX_NUMBER_OF_MENU = freezeObject(
  THRESHOLD.numberOfMenu.max
    .toString()
    .split('')
    .map((v) => `[${v}]`)
    .join(''),
);

const FOOD_ORDER_REGEX_PATTERN = freezeObject(
  `^[가-힣]+${FOOD_DELIMITER}+([${THRESHOLD.numberOfMenu.min}-9]|[1][0-9]|${MAX_NUMBER_OF_MENU})$`,
);

export { DATE_REGEX_PATTERN, FOOD_ORDER_REGEX_PATTERN };
