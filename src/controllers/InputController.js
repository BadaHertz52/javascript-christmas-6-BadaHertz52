import { ReservationDate } from '../models/index.js';
import { InputView, OutputView } from '../views/index.js';

const InputController = {
  async getValidReservationDate() {
    let date;
    while (!date) {
      try {
        const value = await InputView.readDate();
        new ReservationDate(value);
        date = value;
      } catch (error) {
        OutputView.printReservationErrorMessage();
      }
    }
    return Number(date);
  },
};

export default InputController;
