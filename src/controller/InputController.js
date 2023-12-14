import { QUERY } from '../constants/index.js';
import { InputView, OutputView } from '../view/index.js';
import { Order, Reservation } from '../model/index.js';

const InputController = {
  async getReservation() {
    let result = 0;
    while (!result) {
      try {
        const value = await InputView.readDate(QUERY.reservation);
        const { date } = new Reservation(value).getState();
        result = date;
      } catch (error) {
        const { message } = error;
        OutputView.print(message);
      }
    }
    return result;
  },
  async getOrder() {
    let result;
    while (!result) {
      try {
        const value = await InputView.readDate(QUERY.order);
        result = new Order(value).getState();
      } catch (error) {
        const { message } = error;
        OutputView.print(message);
      }
    }
    return result;
  },
};

export default InputController;
