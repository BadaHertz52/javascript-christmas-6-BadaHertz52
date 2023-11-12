import { FOOD_DELIMITER } from './index.js';

const DATE_REGEX_PATTERN = '^[1-9]{1}$|^[1-2][0-9]$|^[3][0-1]$';

const FOOD_ORDER_REGEX_PATTERN = `^[가-힣]+${FOOD_DELIMITER}+[0-9]+$`;

export { DATE_REGEX_PATTERN, FOOD_ORDER_REGEX_PATTERN };
