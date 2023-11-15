import { DATE_REGEX_PATTERN } from '../constants/RegexPattern.js';
import { getReservationDateErrorMessage, testRegExp } from '../utils/index.js';
import CustomError from '../customError/index.js';

class ReservationDate {
  constructor(string) {
    this.#validateDate(string);
    this.#setDate(string);
  }
  #isSuitableForDate(string) {
    return testRegExp(DATE_REGEX_PATTERN, string);
  }
  #validateDate(string) {
    const message = getReservationDateErrorMessage();
    if (!this.#isSuitableForDate(string))
      new CustomError('reservation date error', message);
  }
  #setDate(string) {
    const date = Number(string);
    return date;
  }
}

export default ReservationDate;
