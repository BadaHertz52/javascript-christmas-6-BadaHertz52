import { freezeObject } from '../utils/Freeze.js';
import { FOOD_DELIMITER } from './Rule.js';

const DATE_REGEX_PATTERN = freezeObject('^[1-9]{1}$|^[1-2][0-9]$|^[3][0-1]$');

const FOOD_ORDER_REGEX_PATTERN = freezeObject(
  `^([가-힣a-zA-Z0-9]+)+${FOOD_DELIMITER}+([0-9]+)$`,
);

export { DATE_REGEX_PATTERN, FOOD_ORDER_REGEX_PATTERN };
