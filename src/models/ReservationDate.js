import {
  getReservationErrorMessage,
  isSuitableForDate,
} from '../utils/index.js';

class ReservationDate {
  constructor(string) {
    this.validateDate(string);
    this.setDate(string);
  }
  validateDate(string) {
    const message = getReservationErrorMessage();
    if (!isSuitableForDate(string)) throw new Error(message);
  }
  setDate(string) {
    const date = Number(string);
    return date;
  }
}

export default ReservationDate;
