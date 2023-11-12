import { DATE_REGEX_PATTERN, FOOD_ORDER_PATTERN } from '../constants/index.js';

const testRegExp = (pattern, string) => {
  return new RegExp(pattern).test(string);
};

const isSuitableForDate = (string) => {
  return testRegExp(DATE_REGEX_PATTERN, string);
};
export { testRegExp, isSuitableForDate };
