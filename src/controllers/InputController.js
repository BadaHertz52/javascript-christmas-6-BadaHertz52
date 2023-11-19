import { Order, ReservationDate } from '../models/index.js';
import { InputView } from '../views/index.js';
import OutputController from './OutputController.js';

const InputController = {
  async getValidReservationDate() {
    let date;
    while (!date) {
      try {
        const value = await InputView.readDate();
        date = new ReservationDate(value).getDate();
      } catch (error) {
        OutputController.controlPrintError(error);
      }
    }
    return date;
  },
  async getValidOrder() {
    let order;
    while (!order) {
      try {
        const value = await InputView.readOrder();
        order = new Order(value).getList();
      } catch (error) {
        OutputController.controlPrintError(error);
      }
    }
    return order;
  },
};

export default InputController;
