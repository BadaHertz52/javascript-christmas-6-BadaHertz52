import { Calculator, InputController } from './controllers/index.js';
import Money from './models/Money.js';
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
    xmasDDayEvent: undefined, // undefined|number(할인금액)
    weekDayEvent: undefined,
    weekendEvent: undefined,
    gitEvent: undefined,
    specialEvent: undefined,
    totalDiscount: undefined,
  };
  async run() {
    //예약 방문일
    await this.#getReservationDate();
    OutputView.printEventPreview(this.#reservation.date);
    // 주문
    await this.#getOrder();
    OutputView.printOrder(this.#reservation.order);
    //할인 전 총 금액
    this.#setAmountBeforeDiscount();
    OutputView.printAmount(
      'amountBeforeDiscount',
      this.#reservation.amountOfBeforeDiscount,
    );
  }

  async #getReservationDate() {
    const date = await InputController.getValidReservationDate();
    this.#reservation.date = date;
  }
  async #getOrder() {
    const order = await InputController.getValidOrder();
    this.#reservation.order = order;
  }
  #setAmountBeforeDiscount() {
    const value = new Calculator().getAmountBeforeDiscount(
      this.#reservation.order,
    );
    this.#reservation.amountOfBeforeDiscount = value;
  }
  getAmountBeforeDiscount() {
    return this.#reservation.amountOfBeforeDiscount;
  }
}

export default App;
