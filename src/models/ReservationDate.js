import { DATE_REGEX_PATTERN } from '../constants/RegexPattern.js';
import CustomError from './CustomError.js';
import { getReservationDateErrorMessage, testRegExp } from '../utils/index.js';

class ReservationDate {
  /**
   * @type {number|undefined}
   */
  #date;
  /**
   *
   * @param {string} string
   */
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
      throw new CustomError('reservation date error', message);
  }
  #setDate(string) {
    const date = Number(string);
    this.#date = date;
  }
  getDate() {
    return this.#date;
  }
}

export default ReservationDate;
