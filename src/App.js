import {
  Calculator,
  EventController,
  InputController,
  OutputController,
} from './controllers/index.js';

import { OutputView } from './views/index.js';

class App {
  #reservation = {
    date: undefined,
    order: undefined,
    amountOfBeforeDiscount: undefined,
    amountOfAfterDiscount: undefined,
    totalBenefitAmount: undefined,
    badge: undefined,
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
    OutputController.controlPrintAmount(
      'amountBeforeDiscount',
      this.#reservation.amountOfBeforeDiscount,
    );
    //이벤트 적용
    const benefits = this.#getEventBenefits();
    //이벤트 출력
    OutputController.controlPrintGift(benefits);
    OutputController.controlPrintBenefits(benefits);
    // 이벤트 할인 금액
    this.#setTotalBenefitAmount(benefits);
    OutputController.controlPrintAmount(
      'totalBenefitAmount',
      this.#reservation.totalBenefitAmount,
      true,
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
  #getEventBenefits() {
    const { date, order, amountOfBeforeDiscount } = this.#reservation;
    return new EventController(
      date,
      order,
      amountOfBeforeDiscount,
    ).getBenefits();
  }
  #setTotalBenefitAmount(benefit) {
    this.#reservation.totalBenefitAmount =
      new Calculator().calculateTotalBenefitAmount(benefit);
  }
  getData() {
    return this.#reservation;
  }
}

export default App;
