import { DATE_REGEX_PATTERN } from '../constants/RegexPattern.js';
import { ErrorController } from '../controllers/index.js';
import { getReservationDateErrorMessage, testRegExp } from '../utils/index.js';

class ReservationDate {
  #date;
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
      new ErrorController('reservation date error', message).throwError();
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
