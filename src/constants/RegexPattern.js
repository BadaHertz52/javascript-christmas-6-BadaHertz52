import { FOOD_DELIMITER } from './index.js';

const DATE_REGEX_PATTERN = '^[1-9]{1}$|^[1-2][0-9]$|^[3][0-1]$';

const FOOD_ORDER_PATTERN = `^[가-힣]+${FOOD_DELIMITER}(^[1-9]{1}$|^[1][0-9]$|^[2][0]$)$`;

export { DATE_REGEX_PATTERN, FOOD_ORDER_PATTERN };
