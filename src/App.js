import {
  Calculator,
  EventController,
  InputController,
  OutputController,
} from './controllers/index.js';
import Badge from './models/Badge.js';

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
    OutputView.printGreetings();
    //예약 방문일
    await this.#getReservationDate();
    //이벤트 주의 사항 안내
    OutputView.printNotesOnEvent();
    // 주문
    await this.#getOrder();
    OutputView.printEventPreview(this.#reservation.date);
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
    //할인 후 예상 결제 금액
    this.#setAmountAfterDiscount();
    OutputController.controlPrintAmount(
      'amountAfterDiscount',
      this.#reservation.amountOfAfterDiscount,
    );
    //배지
    this.#setBadge();
    OutputController.controlPrintBadge(this.#reservation.badge);
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
    const value = new Calculator().calculateAmountBeforeDiscount(
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
  #setAmountAfterDiscount() {
    const { amountOfBeforeDiscount, totalBenefitAmount } = this.#reservation;
    this.#reservation.amountOfAfterDiscount =
      new Calculator().calculateAmountAfterDiscount(
        amountOfBeforeDiscount,
        totalBenefitAmount,
      );
  }
  #setBadge() {
    const badge = new Badge(this.#reservation.totalBenefitAmount).getShape();
    if (badge) this.#reservation.badge = badge;
  }
}

export default App;
