import { RESERVATION_PERIOD } from '../constants/index.js';
import { getErrorMessage } from '../utils/Error.js';
import { throwError } from '../utils/index.js';

class Reservation {
  #reservation = {
    month: 12,
    date: undefined,
  };

  constructor(string) {
    this.#validate(string);
    this.#setDate(string);
  }

  #validateNumber(number) {
    return !Number.isNaN(number) && Number.isInteger(number);
  }

  #isInPeriod(number) {
    const { start, end } = RESERVATION_PERIOD;
    return number >= start && number <= end;
  }

  #validate(string) {
    const number = Number(string);

    if (!(this.#validateNumber(number) && this.#isInPeriod(number)))
      throwError('reservation', getErrorMessage('reservation'));
  }

  #setDate(string) {
    this.#reservation.date = Number(string);
  }

  getState() {
    return this.#reservation;
  }
}

export default Reservation;
