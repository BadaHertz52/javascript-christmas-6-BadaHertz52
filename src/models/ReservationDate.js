import { getReservationErrorMessage } from '../utils/index.js';
import { CustomError } from './index.js';

class ReservationDate {
  constructor(string) {
    this.validateDate(string);
    this.setDate(string);
  }
  isSuitableForDate = (string) => {
    return testRegExp(DATE_REGEX_PATTERN, string);
  };
  validateDate(string) {
    const message = getReservationErrorMessage();
    if (!this.isSuitableForDate(string))
      new CustomError('reservation date error', message);
  }
  setDate(string) {
    const date = Number(string);
    return date;
  }
}

export default ReservationDate;
