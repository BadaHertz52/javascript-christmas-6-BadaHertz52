import { Order, ReservationDate } from '../models/index.js';
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
        OutputView.print(error.message);
      }
    }
    return Number(date);
  },
  async getValidOrder() {
    let order;
    while (!order) {
      try {
        const value = await InputView.readOrder();
        new Order(value);
        order = value;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
    return order;
  },
};

export default InputController;
