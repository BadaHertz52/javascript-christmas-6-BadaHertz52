import { InputController } from './controllers/index.js';
import OutputView from './views/OutputView.js';

class App {
  #reservation = {
    date: undefined,
    order: undefined,
    amountOfBeforeDiscount: undefined,
    amountOfAfterDiscount: undefined,
    badge: undefined,
  };

  #benefit = {
    xMasDDayEvent: undefined, // undefined|number(할인금액)
    weekDayEvent: undefined,
    weekendEvent: undefined,
    gitEvent: undefined,
    specialEvent: undefined,
    totalAmount: undefined,
  };
  async run() {
    //예약 방문일
    await this.getReservationDate();
    OutputView.printEventPreview(this.#reservation.date);
    // 주문
    await this.getOrder();
    OutputView.printOrder(this.#reservation.order);
  }
  async getReservationDate() {
    const date = await InputController.getValidReservationDate();
    this.#reservation.date = date;
  }
  async getOrder() {
    const order = await InputController.getValidOrder();
    this.#reservation.order = order;
  }
}

export default App;
